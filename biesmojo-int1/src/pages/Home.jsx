import React from 'react';
import Header from '../components/Header';
import heroImage from '../assets/images/hero.jpg';
import course1Image from '../assets/images/course-1.jpg';
import course2Image from '../assets/images/course-2.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section hero">
          <div className="container">
            <div className="hero-text">
              <h1>Kumpulan Video Course on Demand</h1>
              <p>Belajar mandiri dengan materi terkurasi, dari mentor berpengalaman.</p>
              <div className="actions">
                <a className="btn primary" href="#courses">Mulai Belajar</a>
                <a className="btn ghost" href="#newsletter">Lihat Cara Kerja</a>
              </div>
            </div>
            <div className="hero-media">
              <img src={heroImage} alt="Belajar online" />
            </div>
          </div>
        </section>

        {/* Koleksi unggulan */}
        <section className="section course-grid" id="courses">
          <div className="container">
            <h2>Koleksi Unggulan</h2>

            {/* Kategori */}
            <div className="categories" style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn ghost" data-cat="all">Semua Kelas</button>
              <button className="btn ghost" data-cat="pemasaran">Pemasaran</button>
              <button className="btn ghost" data-cat="desain">Desain</button>
              <button className="btn ghost" data-cat="pengembangan-diri">Pengembangan Diri</button>
              <button className="btn ghost" data-cat="bisnis">Bisnis</button>
            </div>

            {/* Grid card */}
            <div className="grid" style={{ marginTop: '24px' }}>
              <article className="card course" data-cat="desain">
                <img src={course1Image} alt="Desain UI" />
                <div className="card-body">
                  <h3>Desain UI Dasar</h3>
                  <p className="meta">Kategori: Desain</p>
                  <p>Pelajari prinsip UI dan praktik membuat mockup.</p>
                  <a className="btn link" href="#">Lihat detail</a>
                </div>
              </article>
              <article className="card course" data-cat="desain">
                <img src={course2Image} alt="Financial Analysis" />
                <div className="card-body">
                  <h3>Big 4 Auditor Financial Analyst</h3>
                  <p className="meta">Kategori: Bisnis</p>
                  <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
                  <a className="btn link" href="#">Lihat detail</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="section" id="newsletter">
          <div className="container">
            <h2>Dapatkan Newsletter</h2>
            <p className="meta">Masukkan email untuk update kursus terbaru.</p>
            <form id="newsletterForm" style={{ maxWidth: '560px', marginTop: '16px' }}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="nama@domain.com" required />
              </div>
              <button className="btn primary" type="submit">Submit</button>
              <p id="newsletterMsg" className="meta" style={{ marginTop: '12px', display: 'none' }}></p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '24px' }}>
          <div>
            <strong>VideoBelajar</strong>
            <p className="meta">Platform belajar mandiri dengan video course on demand.</p>
          </div>
          <div>
            <strong>Kategori</strong>
            <ul style={{ listStyle: 'none', padding: '0', marginTop: '8px' }}>
              <li><a href="#">Pemasaran</a></li>
              <li><a href="#">Desain</a></li>
              <li><a href="#">Pengembangan Diri</a></li>
              <li><a href="#">Bisnis</a></li>
            </ul>
          </div>
          <div>
            <strong>Sosial</strong>
            <ul style={{ listStyle: 'none', padding: '0', marginTop: '8px' }}>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ padding: '16px 24px', borderTop: '1px solid #e5e7eb', marginTop: '24px' }}>
          <p className="meta">© 2026 Biesmojo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
