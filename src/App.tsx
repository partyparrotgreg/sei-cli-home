import { useState } from "react";
import "./App.css";

function truncateAddress(address: string) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}

function App() {
const [count, setCount] = useState(0);
  const coppyToClipboard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    } finally {
      alert("Copied to clipboard!");
    }
  }
  return (
    <>
      <div className="header">
        <img src="sei-logotype.svg" className="logo" alt="SEI logotype" />
        <div className="wallet-connect">
          <button className="primary small">Connect wallet</button>
          <button className="outline small">
            {truncateAddress("0x491C63bfD71882be1753931816C295Ff03657e29")}
          </button>
        </div>
      </div>
      <main className="container">
        <div className="grid">
          {/* Not connected */}
          <div className="card intro">
            <div className="card-header">
              <p className="card__title">Wallet address</p>
              <small className="card__description">
                Connect wallet to see your address and balance
              </small>
            </div>
            <button className="primary">Connect wallet</button>
          </div>
          {/* First card */}
          <div className="card">
            <div className="card-header">
              <p className="card__title">Wallet address</p>
              <small className="card__description">
                <a href="#">Viem Public Client</a> query example
              </small>
            </div>
            <div className="card-body">
              <div className="content-background space-between">
                <p className="wallet-address hide-on-desktop">
                  {truncateAddress(
                    "0x491C63bfD71882be1753931816C295Ff03657e29"
                  )}
                </p>
                <p className="wallet-address hide-on-mobile">
                  0x491C63bfD71882be1753931816C295Ff03657e29
                </p>
                <button
                  className="small outline"
                  onClick={() =>
                    coppyToClipboard(
                      "0x491C63bfD71882be1753931816C295Ff03657e29"
                    )
                  }
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="card-footer">
              <button>Disconnect</button>
            </div>
          </div>
          {/* Second card */}
          <div className="card">
            <div className="card-header">
              <p className="card__title">Wallet balance</p>
              <small className="card__description">
                <a href="#">Viem Public Client</a> query example
              </small>
            </div>
            <div className="card-body">
              <div className="content-background space-between">
                <small>SEI</small>
                <p>1,203,600.00 SEI</p>
              </div>
            </div>
            <div className="card-footer">
              <button>Fetch balance</button>
              <button disabled>Fetching...</button>
            </div>
          </div>

          {/* Third card */}
          <div className="card">
            <div className="card-header">
              <p className="card__title">Total Sei supply</p>
              <small className="card__description">
                <a href="#">Bank precompile</a> example for querying native Sei
                modules
              </small>
            </div>
            <div className="card-body">
              <div className="content-background space-between">
                <small>SEI</small>
                <p>100,000,000,000.00</p>
              </div>
            </div>
            <div className="card-footer">
              <button>Fetch supply</button>
            </div>
          </div>

          {/* Fourth card */}
          <div className="card">
            <div className="card-header">
              <p className="card__title">Smart contract interaction</p>
              <small>
                <a href="#">WASM Precompile</a> example of CosmWasm smart
                contract interaction
              </small>
            </div>
            <div className="card-body">
              <div className="content-background space-between">
                <small>Count</small>
                <p>{count}</p>
                <button
                  className="small outline"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Increase
                </button>
              </div>
            </div>
            <div className="card-footer">
              <button>Fetch count</button>
            </div>
          </div>
        </div>
        <div className="get-started">
          Get started by editing <code>src/App.tsx</code>
        </div>
        <div className="grid docs">
          <div className="card secondary">
            <div className="card-header">
              <p className="card__title">
                <a href="" className="external-link">
                  Sei Docs {externalIcon}
                </a>
              </p>
              <small className="card__description">
                Find in-depth information about Sei.
              </small>
            </div>
          </div>
          <div className="card secondary">
            <div className="card-header">
              <p className="card__title">
                <a href="" className="external-link">
                  Wagmi {externalIcon}
                </a>
              </p>
              <small className="card__description">
                Learn about Wagmi, a library for interacting with Ethereum.
              </small>
            </div>
          </div>
          <div className="card secondary">
            <div className="card-header">
              <p className="card__title">
                <a href="" className="external-link">
                  Viem {externalIcon}
                </a>
              </p>
              <small className="card__description">
                Learn about Viem, a library for interacting with EVM-compatible
                chains.
              </small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const externalIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
      stroke="#9F1239"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2H14V6"
      stroke="#9F1239"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66663 9.33333L14 2"
      stroke="#9F1239"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default App;
