
import './App.css';


function App() {
  return (
    <div className="App">

      <section className='header'>
      <div className='nav'>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="logo" />
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu"/>
      </div>
      <h1>Say hello to ReactJS</h1>
      <p>You wil learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <button>Awesome!</button>
      </section>

      <section className='section-2'>
        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="Declarative img" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive Uis.</p>
        </div>

        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="Components img" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="Single-way img" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="JSX img" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>

    </div>
  );
}

export default App;
