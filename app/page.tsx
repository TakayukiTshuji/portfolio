export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* ヘッダー */}
      <header className="w-full flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="w-full flex flex-col items-center gap-12">
        {/* 自己紹介 */}
        <section id="about" className="w-full max-w-3xl mb-8">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            はじめまして、大阪電気通信大学の4年でエンジニアを目指していて日々学習・開発を取り組んでいます。
            大学は情報系を選考しており、プログラミングを通じて、
          </p>
        </section>
        {/* プロジェクトカード */}
        <section id="projects" className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-bold">落とし物ステーション</h3>
              <p className="text-sm text-gray-600">大学3年で立てたプロジェクトで落とし物をWebアプリ上で利用する</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-bold">チャットツール</h3>
              <p className="text-sm text-gray-600">プロジェクトの説明が入ります。</p>
            </div>
          </div>
        </section>

        {/* スキルリスト */}
        <section id="skills" className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-gray-200 px-3 py-1 rounded">React</li>
            <li className="bg-gray-200 px-3 py-1 rounded">TypeScript</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Tailwind CSS</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Next.js</li>
          </ul>
        </section>
      </main>

      {/* フッター */}
      <footer className="w-full text-center py-4 border-t text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}
