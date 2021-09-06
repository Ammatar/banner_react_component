import './App.css';
import Banner from './components/Banner/Banner';

function App() {
  // let date = new Date('2021-09-06 23:15:30');
  return (
    <div className="App">
      <h1>Banner</h1>
      <div className="sample_box">
        <div>
          <Banner
            title="Get 100% welcome bonus"
            text="Deposit $ 100 get $ 100 free"
            time="2021-09-06 23:15:30"
            options={{
              bg: 'blue',
            }}
          />
        </div>
        <Banner
          title="Double your deposit"
          text="+100% on real account with deposit from $ 50 to $ 150"
          time="2021-09-07 23:15:30"
          options={{
            bg: 'violet',
          }}
        />

        <Banner
          title="Get VIP status"
          text="Instant money withdrawal"
          time="2021-09-08 23:15:30"
          options={{
            bg: 'green',
          }}
        />
        <Banner
          title="Get VIP status for 50%"
          text="Increase in return to 92%"
          time="2021-10-06 23:15:30"
          options={{
            bg: 'dark',
          }}
        />
      </div>
    </div>
  );
}

export default App;
