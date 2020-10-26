
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/apa-itu-qontak-chat',
  component: ComponentCreator('/docs/apa-itu-qontak-chat'),
  exact: true,
  
},
{
  path: '/docs/feature',
  component: ComponentCreator('/docs/feature'),
  exact: true,
  
},
{
  path: '/docs/login-chat-panel',
  component: ComponentCreator('/docs/login-chat-panel'),
  exact: true,
  
},
{
  path: '/docs/login-via-crm',
  component: ComponentCreator('/docs/login-via-crm'),
  exact: true,
  
},
{
  path: '/docs/menambahkan-pengguna',
  component: ComponentCreator('/docs/menambahkan-pengguna'),
  exact: true,
  
},
{
  path: '/docs/menggunakan-qontak-chat',
  component: ComponentCreator('/docs/menggunakan-qontak-chat'),
  exact: true,
  
},
{
  path: '/docs/mengirimkan-menerima-pesan',
  component: ComponentCreator('/docs/mengirimkan-menerima-pesan'),
  exact: true,
  
},
{
  path: '/docs/menulis-catatan',
  component: ComponentCreator('/docs/menulis-catatan'),
  exact: true,
  
},
{
  path: '/docs/mobile-app',
  component: ComponentCreator('/docs/mobile-app'),
  exact: true,
  
},
{
  path: '/docs/pencarian',
  component: ComponentCreator('/docs/pencarian'),
  exact: true,
  
},
{
  path: '/docs/pendaftaran-akun',
  component: ComponentCreator('/docs/pendaftaran-akun'),
  exact: true,
  
},
{
  path: '/docs/pengaturan-auto-response',
  component: ComponentCreator('/docs/pengaturan-auto-response'),
  exact: true,
  
},
{
  path: '/docs/pengaturan-chat-assignment',
  component: ComponentCreator('/docs/pengaturan-chat-assignment'),
  exact: true,
  
},
{
  path: '/docs/pengaturan-chat-bot',
  component: ComponentCreator('/docs/pengaturan-chat-bot'),
  exact: true,
  
},
{
  path: '/docs/pengaturan-chat-template',
  component: ComponentCreator('/docs/pengaturan-chat-template'),
  exact: true,
  
},
{
  path: '/docs/pengaturan-jam-kerja',
  component: ComponentCreator('/docs/pengaturan-jam-kerja'),
  exact: true,
  
},
{
  path: '/docs/pertanyaan-umum',
  component: ComponentCreator('/docs/pertanyaan-umum'),
  exact: true,
  
},
{
  path: '/docs/role-pengguna',
  component: ComponentCreator('/docs/role-pengguna'),
  exact: true,
  
},
{
  path: '/docs/status-terkirim',
  component: ComponentCreator('/docs/status-terkirim'),
  exact: true,
  
},
{
  path: '/docs/whatsapp-business',
  component: ComponentCreator('/docs/whatsapp-business'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
