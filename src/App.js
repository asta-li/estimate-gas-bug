import './App.css';

import {JsonRpcProvider} from '@ethersproject/providers';

function App() {

  const test = async () => {

    // This unexpectedly fails if you uncomment the "from" field
    const txRequest = {
      data: "0x40c10f19000000000000000000000000e1924b1d35f6dd6786f0c81a4b14c009b76ba3000000000000000000000000000000000000000000000000000000000000000001",
      // from: "0xe1924b1d35f6dd6786f0c81a4b14c009b76ba300",
      to: "0xa4c3bf7aaa7ff67dded9d805e6dd4c79832917f4",
      value: "0x11c37937e08000",
    };
    console.log("Transaction", txRequest);

    const provider = new JsonRpcProvider('https://goerli.infura.io/v3/4df5e2316331463a9130964bd6078dfa');
    const gasEstimate = await provider.estimateGas(txRequest);
    console.log("Gas estimate", gasEstimate);
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={test}
        >
          Test estimateGas
        </button>
      </header>
    </div>
  );
}

export default App;
