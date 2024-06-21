export default function Home() {
  return (
    <main className="flex min-h-screen">
      <aside className="w-1/4 bg-gray-800 text-white flex flex-col p-8">
        <h1 className="text-2xl font-bold mb-6">Crypto Wallet</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-400">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-400">Send Crypto</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-400">Transactions</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-400">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Send Crypto</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Balance</h3>
            <p className="text-4xl font-bold">10 BTC</p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Enter: </h3>
            <form className="flex flex-col">
              <label className="mb-2 text-sm opacity-75" htmlFor="address">
                Recipient Address
              </label>
              <input
                className="input-field mb-4"
                type="text"
                id="address"
                placeholder=""
              />
              <label className="mb-2 text-sm opacity-75" htmlFor="amount">
                Amount (BTC)
              </label>
              <input
                className="input-field mb-4"
                type="number"
                id="amount"
                placeholder=""
              />
              <button
                type="submit"
                className="submit-button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
