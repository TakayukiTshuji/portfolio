export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">
      {/* ヘッダー */}
      <header className="w-full flex justify-between items-center py-4 border-b sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="w-full flex flex-col items-center gap-12">
        {/* 自己紹介 */}
        <section id="about" className="w-full max-w-3xl mb-8 scroll-mt-24">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            はじめまして、大阪電気通信大学に在学しており現在4年でエンジニアを目指していて日々学習・開発を取り組んでいます。
            大学は情報系を選考しており、プログラミング研究会という今年(2025年現在)に同好会になったサークルで、主にプログラミングを使用した制作を行なっています。
            サークルでの制作を通して一つ一つ作った部品が一つの形になっていくことに面白さを見出しエンジニアを目指しました。
          </p>
          <p className="text-gray-700">
            趣味は散歩で、見知っている街や知らないところをあてもなく歩くことです。最近はポケモンGoにハマり外に出ればポケモンGoをしています。
          </p>
        </section>
        {/* プロジェクトカード */}
        <section id="projects" className="w-full max-w-3xl scroll-mt-24">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-bold">落とし物ステーション</h3>
              <p className="text-sm text-gray-600">
                大学3年時に制作したプロジェクトで大学内での落とし物をWebアプリ上で閲覧、管理の利用ができるようにしました。
                
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="font-bold">チャットツール</h3>
              <p className="text-sm text-gray-600">
                大学2年時に制作したプロジェクトで、大学内でのメッセージツールとして使えるWebアプリとして作成を行おうとしました。

              </p>
            </div>
          </div>
        </section>

        {/* スキルリスト */}
        <section id="skills" className="w-full max-w-3xl scroll-mt-24">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-gray-200 px-3 py-1 rounded">React</li>
            <li className="bg-gray-200 px-3 py-1 rounded">TypeScript</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Tailwind CSS</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Next.js</li>
          </ul>
        </section>

        {/* コンタクト情報 */}
        <section id="contact" className="w-full max-w-3xl scroll-mt-24">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a 
                href="https://github.com/TakayukiTshuji" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://qiita.com/TshujiTakayuki" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                </svg>
                Qiita
              </a>
            </li>
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
