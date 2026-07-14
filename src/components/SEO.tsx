import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta } from '../data/site';

const baseUrl = 'https://variable27.github.io/MaeHive/';

function setMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

export function SEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta['/'];
    const url = `${baseUrl}#${location.pathname}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [location.pathname]);

  return null;
}
