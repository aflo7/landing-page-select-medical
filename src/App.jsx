import { useState } from 'react';
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import selectMedicalLogo from './assets/select-medical.png';
import { FaSearch } from 'react-icons/fa';
import { GiHeartPlus } from 'react-icons/gi';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          borderBottom: '5px solid rgb(96,181,108)'
        }}
      >
        <GiHamburgerMenu size="2rem" />
        <img src={selectMedicalLogo} height="60px" />
        <FaSearch size="2rem" />
      </div>

      <div className="deliverBackground">
        <h2>We deliver the best outcomes across the continuum of care</h2>
        <button id="howWeCanHelpBtn">How we can help</button>
      </div>
      <div className="bottom-nav">
        <div>
          <GiHeartPlus />

          <div>Find a Location</div>
        </div>
        <div>
          <GiHeartPlus />

          <div>Request treatment</div>
        </div>
        <div>
          <GiHeartPlus />

          <div>Make a referral</div>
        </div>
      </div>
      <div style={{ padding: '20px 40px' }}>
        <h1>A leader in post-acute recovery and rehabilitation</h1>
        <p style={{ textAlign: 'center', color: 'gray' }}>
          Select Medical is one of the largest providers of critical illness
          recovery hospitals, inpatient rehabilitation hospitals, outpatient
          rehabilitation centers and occupational health clinics in the United
          States. Guided by our mission to provide an exceptional patient care
          experience that promotes healing and recovery in a compassionate
          environment, our 54,000 healthcare professionals help to restore
          quality of life for thousands of people and their families every day.
        </p>
      </div>
      <div
        style={{
          backgroundColor: 'rgb(36, 155, 128)',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          gap: '100px'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.8rem' }}>
            Select Medical Continuum of Care
          </h3>
          <h4 style={{ fontSize: '1.4rem' }}>Recover. Rebuild. Resume.</h4>
          <p style={{ fontSize: '1.2rem' }}>
            No one plans to get sick or hurt, it just happens. That's why we're
            here -- to help you heal, restore function and get you back to your
            everyday life. We call this the Select Medical Continuum of Care
            because we're able to guide you through every step of recovery from
            hospital to home.
          </p>
        </div>

        <div
          className="bottom-icons"
          style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}
        >
          <img
            src="https://www.selectmedical.com/-/media/project/selectmedical/inpatients/shared/icons/cocicon1.png?h=57&iar=0&w=57&rev=263b89dffe17479fa4288cb2cd031eda&t=20231129204326&hash=36A652B961AA9268597EEBE5C712BB4E"
            height="80px"
          />

          <img
            src="https://www.selectmedical.com/-/media/project/selectmedical/inpatients/shared/icons/cocicon1.png?h=57&iar=0&w=57&rev=263b89dffe17479fa4288cb2cd031eda&t=20231129204326&hash=36A652B961AA9268597EEBE5C712BB4E"
            height="80px"
          />

          <img
            src="https://www.selectmedical.com/-/media/project/selectmedical/inpatients/shared/icons/cocicon1.png?h=57&iar=0&w=57&rev=263b89dffe17479fa4288cb2cd031eda&t=20231129204326&hash=36A652B961AA9268597EEBE5C712BB4E"
            height="80px"
          />
        </div>
      </div>
    </>
  );
}

export default App;
