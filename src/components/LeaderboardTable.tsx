import { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { SortingState, ColumnDef, CellContext } from '@tanstack/react-table';
import { 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  FileText, 
  Github,
  Globe,
  Lock,
  Unlock,
} from 'lucide-react';
import type { LeaderboardEntry, Metric } from '../types';
import { formatScore, getPaperUrl } from '../data/utils';

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
  metrics: Metric[];
  showDetails?: boolean;
}

function getRankBadge(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return `${rank}`;
}

export function LeaderboardTable({ data, metrics, showDetails = true }: LeaderboardTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const primaryMetric = metrics[0];

  const columns = useMemo((): ColumnDef<LeaderboardEntry>[] => {
    const baseColumns: ColumnDef<LeaderboardEntry>[] = [
      {
        id: 'rank',
        accessorFn: (row) => row.rank,
        header: 'Rank',
        cell: (info: CellContext<LeaderboardEntry, unknown>) => (
          <span className="rank-cell">{getRankBadge(info.getValue() as number)}</span>
        ),
        size: 70,
      },
      {
        id: 'model',
        accessorFn: (row) => row.model.name,
        header: 'Model',
        cell: (info: CellContext<LeaderboardEntry, unknown>) => {
          const model = info.row.original.model;
          const paperUrl = getPaperUrl(model.paper);
          return (
            <div className="model-cell">
              <div className="model-info">
                {paperUrl ? (
                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="model-name"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {model.name}
                  </a>
                ) : (
                  <span className="model-name">{model.name}</span>
                )}
                {model.organization && (
                  <span className="model-org">{model.organization}</span>
                )}
              </div>
              <div className="model-links">
                {model.isOpenSource ? (
                  <Unlock size={14} className="open-source-icon" aria-label="Open Source" />
                ) : (
                  <Lock size={14} className="closed-source-icon" aria-label="Closed Source" />
                )}
                {paperUrl && (
                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon"
                    title="Paper"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileText size={14} />
                  </a>
                )}
                {model.githubUrl && (
                  <a
                    href={model.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon"
                    title="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                  </a>
                )}
                {model.huggingfaceUrl && (
                  <a
                    href={model.huggingfaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon"
                    title="Hugging Face"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🤗
                  </a>
                )}
                {model.websiteUrl && (
                  <a
                    href={model.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon"
                    title="Website"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe size={14} />
                  </a>
                )}
              </div>
            </div>
          );
        },
        size: 300,
      },
      {
        id: 'size',
        accessorFn: (row) => row.model.modelSize ?? '-',
        header: 'Size',
        cell: (info: CellContext<LeaderboardEntry, unknown>) => (
          <span className="size-cell">{(info.getValue() as string) || '-'}</span>
        ),
        size: 80,
      },
      {
        id: 'score',
        accessorFn: (row) => row.score,
        header: primaryMetric?.name || 'Score',
        cell: (info: CellContext<LeaderboardEntry, unknown>) => (
          <span className="score-cell">
            {formatScore(info.getValue() as number, primaryMetric?.format)}
          </span>
        ),
        size: 120,
      },
    ];

    // Add detail columns for sub-metrics
    if (showDetails && metrics.length > 1) {
      metrics.slice(1).forEach((metric) => {
        baseColumns.push({
          id: metric.id,
          accessorFn: (row) => row.details?.[metric.id],
          header: metric.name,
          cell: (info: CellContext<LeaderboardEntry, unknown>) => {
            const value = info.getValue() as number | undefined;
            return (
              <span className="detail-cell">
                {value !== undefined ? formatScore(value, metric.format) : '-'}
              </span>
            );
          },
          size: 100,
        });
      });
    }

    return baseColumns;
  }, [metrics, primaryMetric, showDetails]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="leaderboard-table-container">
      <table className="leaderboard-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={header.column.getCanSort() ? 'sortable' : ''}
                  style={{ width: header.getSize() }}
                >
                  <div className="th-content">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <span className="sort-icon">
                        {header.column.getIsSorted() === 'asc' ? (
                          <ArrowUp size={14} />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <ArrowDown size={14} />
                        ) : (
                          <ArrowUpDown size={14} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={row.original.rank <= 3 ? 'top-rank' : ''}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
