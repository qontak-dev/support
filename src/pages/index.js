import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={` Qontak `}
      description="Pusat Bantuan, Help Center, WhatsApp, Qontak, Chat Panel, OmniChannel">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Bagaimana kami dapat membantu Anda?</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={classnames("q-category_page")}>
          <div className={classnames("q-category_container")}>
            <div className={classnames("q-category_trees")}>
              <div className={classnames('q-section-tree-with-article')}>
                <ul>
                  <li class="q-section" id="mulai">
                    <h2 title="Mulai">🎯 Mulai</h2>
                    <ul class="q-article-list">
                      <li><Link to={useBaseUrl('docs/apa-itu-qontak-chat')}> <b class='q-highlight'>Apa itu</b> Qontak Chat?</Link></li>
                      <li><Link to={useBaseUrl('docs/menggunakan-qontak-chat')}> <b class='q-highlight'>Cara Menggunakan</b> Qontak Chat</Link></li>
                      <li><Link to={useBaseUrl('docs/pendaftaran-akun')}> <b class='q-highlight'>Pendaftaran</b> Akun</Link></li>
                      <li> <Link to={useBaseUrl('docs/whatsapp-business')}> Pendaftaran <b class='q-highlight'>WhatsApp Business</b></Link> </li>
                      <li> <Link to={useBaseUrl('docs/feature')}> <b class='q-highlight'>Fitur</b> Qontak Chat</Link> </li>
                      <li> <Link to={useBaseUrl('docs/mobile-app')}> <b class='q-highlight'>Mobile App</b> Qontak Chat</Link> </li>
                    </ul>
                  </li>
                  <li class="q-section" id="role-pengguna">
                    <h2 title="Memahami Role Pengguna">👥 Memahami Role Pengguna</h2>
                    <ul class="q-article-list">
                      <li><Link to={useBaseUrl('docs/role-pengguna')}> <b class='q-highlight'>Role Pengguna</b> di Qontak Chat</Link></li>
                      <li><Link to={useBaseUrl('docs/menambahkan-pengguna')}> <b class='q-highlight'>Menambahkan Pengguna</b></Link></li>
                    </ul>
                  </li>
                  <li class="q-section" id="mengirim-menerima-pesan">
                    <h2 title="Mengirim dan Menerima Pesan">💬 Mengirim dan Menerima Pesan</h2>
                    <ul class="q-article-list">
                      <li><Link to={useBaseUrl('docs/mengirimkan-menerima-pesan')}> <b class='q-highlight'>Mengirimkan dan Menerima</b> Pesan</Link></li>
                      <li><Link to={useBaseUrl('docs/status-terkirim')}> <b class='q-highlight'>Status Terkirim</b> Pesan</Link></li>
                      <li><Link to={useBaseUrl('docs/menulis-catatan')}> <b class='q-highlight'>Menulis Catatan</b></Link></li>
                    </ul>
                  </li>
                  <li class="q-section" id="pencarian">
                    <h2 title="Pencarian">🔍 Pencarian</h2>
                    <ul class="q-article-list">
                      <li><Link to={useBaseUrl('docs/pencarian')}> <b class='q-highlight'>Pencarian</b> Chat Room</Link></li>
                    </ul>
                  </li>
                  <li class="q-section" id="pengaturan-chat">
                    <h2 title="Pengaturan Chat">⚙️ Pengaturan Chat</h2>
                    <ul class="q-article-list">
                      <li><Link to={useBaseUrl('docs/pengaturan-chat-assignment')}> Pengaturan <b class='q-highlight'>Chat Assignment</b></Link></li>
                      <li><Link to={useBaseUrl('docs/pengaturan-jam-kerja')}> Pengaturan <b class='q-highlight'>Jam Kerja</b></Link></li>
                      <li><Link to={useBaseUrl('docs/pengaturan-auto-response')}> Pengaturan <b class='q-highlight'>Auto Response</b></Link></li>
                      <li><Link to={useBaseUrl('docs/pengaturan-chat-template')}> Pengaturan <b class='q-highlight'>Chat Template Message</b></Link></li>
                      <li><Link to={useBaseUrl('docs/pengaturan-chat-bot')}> Pengaturan <b class='q-highlight'>Chat Bot</b></Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
