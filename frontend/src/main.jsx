import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [backend, setBackend] = useState('Checking...');
  const [health, setHealth] = useState('Checking...');

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(data => setBackend(data.message || 'Operational'))
      .catch(() => setBackend('Unavailable'));

    fetch('/health')
      .then(r => r.json())
      .then(data =>
        setHealth(data.status === 'healthy' ? 'Operational' : 'Unavailable')
      )
      .catch(() => setHealth('Unavailable'));
  }, []);

  const transactions = [
    ['Salary Credit', 'Income', '+₹45,000'],
    ['Amazon', 'Shopping', '-₹2,499'],
    ['Coffee Shop', 'Food & Dining', '-₹420'],
    ['Electricity Bill', 'Utilities', '-₹1,850']
  ];

  return (
    <div className="app">

      <aside className="sidebar">
        <div className="logo">
          <span>D</span>
          <div>
            <b>DevBank</b>
            <small>Cloud Banking Platform</small>
          </div>
        </div>

        <nav>
          <a className="active">⌂ Dashboard</a>
          <a>▣ Accounts</a>
          <a>↕ Transactions</a>
          <a>◫ Analytics</a>
        </nav>

        <div className="system">
          <small>INFRASTRUCTURE</small>
          <div>🟢 System Online</div>
          <span>AWS environment healthy</span>
        </div>
      </aside>

      <main>

        <header>
          <div>
            <small>DevBank / Dashboard</small>
            <h1>Dashboard</h1>
          </div>

          <div className="online">
            ● All systems operational
          </div>
        </header>

        <section className="hero">
          <div>
            <label>PERSONAL FINANCE DEMO • NON-PRODUCTION</label>
            <h2>Welcome to DevBank</h2>
            <p>
              A cloud-native banking application powered by
              containerized microservices and automated CI/CD.
            </p>
          </div>

          <strong>● Live Environment</strong>
        </section>

        <section className="metrics">

          <Card
            title="Total Balance"
            value="₹84,250.00"
            change="↑ 12.5% this month"
          />

          <Card
            title="Monthly Income"
            value="₹45,000"
            change="↑ 8.2% this month"
          />

          <Card
            title="Monthly Expenses"
            value="₹18,750"
            change="↓ 3.1% this month"
          />

          <Card
            title="Savings Rate"
            value="58.3%"
            change="Healthy monthly rate"
          />

        </section>

        <section className="columns">

          <div className="panel">

            <div className="panel-title">
              <div>
                <h3>Recent Transactions</h3>
                <p>Latest activity in your demo account</p>
              </div>

              <button>View all →</button>
            </div>

            {transactions.map(transaction => (
              <div className="transaction" key={transaction[0]}>

                <div className="transaction-icon">
                  ₹
                </div>

                <div>
                  <b>{transaction[0]}</b>
                  <small>{transaction[1]}</small>
                </div>

                <strong
                  className={
                    transaction[2].startsWith('+')
                      ? 'positive'
                      : 'negative'
                  }
                >
                  {transaction[2]}
                </strong>

              </div>
            ))}

          </div>

          <div className="panel">

            <div className="panel-title">
              <div>
                <h3>Accounts</h3>
                <p>Demo account balances</p>
              </div>
            </div>

            <div className="account blue">
              <small>Checking Account •••• 2847</small>
              <b>₹52,400.00</b>
              <span>Available balance</span>
            </div>

            <div className="account purple">
              <small>Savings Account •••• 7192</small>
              <b>₹31,850.00</b>
              <span>Available balance</span>
            </div>

          </div>

        </section>

        <section className="panel">

          <div className="panel-title">

            <div>
              <h3>DevOps Infrastructure</h3>
              <p>Containerized microservices • CI/CD deployment pipeline</p>
            </div>

           <div className="healthy">
            ● CI/CD Deployment Healthy
           </div>

          </div>

          <div className="services">

            <Service name="Frontend" tech="React + Nginx" />

            <Service
              name="Backend API"
              tech="Node.js REST API"
            />

            <Service name="Container" tech="Docker" />

            <Service name="AWS ECS" tech="Fargate" />

            <Service name="CodeBuild" tech="CI Build" />

            <Service name="CodePipeline" tech="CI/CD" />

          </div>

          <div className="api">
            <span>🟢 Backend API</span>
            <b>{backend}</b>
          </div>

          <div className="api">
            <span>🟢 Health Endpoint</span>
            <b>{health}</b>
          </div>

        </section>

        <footer>
          <span>
            DevBank • Cloud-Native Microservices Demonstration
          </span>

          <span>
            React • Docker • AWS ECS • CodePipeline
          </span>
        </footer>

      </main>

    </div>
  );
}

function Card({ title, value, change }) {
  return (
    <div className="metric">
      <small>{title}</small>
      <b>{value}</b>
      <span>{change}</span>
    </div>
  );
}

function Service({ name, tech }) {
  return (
    <div className="service">
      <span>●</span>
      <b>{name}</b>
      <small>{tech}</small>
      <em>Operational</em>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
