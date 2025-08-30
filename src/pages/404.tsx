import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translations } from '../i18n/translations';

export default function NotFound() {
  const { i18n: { currentLocale } } = useDocusaurusContext();

  // Fallback to 'en' if locale not found
  const t = translations[currentLocale] || translations.en;

  return (
    <Layout title={t.intro?.title || 'Page Not Found'}>
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl font-bold mb-4">
          {currentLocale === 'es' ? 'Página no encontrada' : 'Page Not Found'}
        </h1>
        <p className="mb-8 text-lg">
          {currentLocale === 'es'
            ? 'Lo sentimos, no pudimos encontrar lo que buscabas.'
            : "Sorry, we couldn't find what you were looking for."}
        </p>
        <Link
          className="px-6 py-2.5 text-sm font-semibold text-white bg-[#ff1270] rounded-lg hover:bg-[#e01160] transition"
          to="/"
        >
          {currentLocale === 'es' ? 'Ir a la página principal' : 'Go to Homepage'}
        </Link>
      </main>
    </Layout>
  );
}