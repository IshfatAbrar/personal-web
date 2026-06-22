"use client";

import { useState } from "react";

function EntryItem({ item }) {
  const content = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-medium transition-colors group-hover:text-muted">
          {item.title}
        </h2>
        {item.href && (
          <span
            aria-hidden="true"
            className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
          >
            &rarr;
          </span>
        )}
      </div>
      {item.subtitle && <p className="text-xs text-muted">{item.subtitle}</p>}
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <li className="group space-y-2 py-6 first:pt-0">
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block space-y-2"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

export default function EntryList({
  items,
  collapsible = false,
  visibleCount = 3,
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = collapsible && items.length > visibleCount;
  const visibleItems =
    hasMore && !expanded ? items.slice(0, visibleCount) : items;
  const hiddenCount = items.length - visibleCount;

  return (
    <div>
      <ul className="divide-y divide-border">
        {visibleItems.map((item) => (
          <EntryItem key={item.title} item={item} />
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}
