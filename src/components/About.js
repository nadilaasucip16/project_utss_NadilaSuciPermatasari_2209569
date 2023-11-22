// About.jsx
import nanad from "../aset/img3.jpg";
import React from 'react';

const About = () => {
  return (
    <main>
      <div className="container">
        <h2 className="display-3 text-center" id="about">
          About Me
        </h2>
        <div className="clearfix pt-5">
          <img src={nanad}
            className="rounded-circle center-img"
            alt="My Photo"
            width="200"
            height="200"
          />
        </div>
      </div>
      <div className="Tentang-Saya text-center">
        <div className="teks">
        <p className="lead text-center">Sebuah petualangan di dunia perantauan.</p>
        <p>Hallo, Namaku Nadila Suci Permatasari.</p>
        <p>
          Aku mahasiswa Pendidikan Ilmu Komputer Universitas Pendidikan Indonesia<br/>
          Aku lahir di Bandung, 16 Januari 2004. Aku mahasiswa Pendidikan Ilmu <br/>
          Komputer semester 3 yang tengah mencari ilmu, tapi hobbi aku masak <br/>
          dan aku bercita-cita mempunyai rumah makan/dapur yang berbasis IoT. <br/>
        </p>
        </div>
      </div>
    </main>
  );
};

export default About;
