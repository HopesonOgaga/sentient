// FogoGuide.jsx
import React from "react";

export default function FogoGuide() {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-400">
          How to Contribute to Fogo 🔥
        </h2>

        <div className="space-y-12 text-lg leading-relaxed">
          {/* PYTH Staking Guide */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">
              ✅ Stake PYTH tokens through Oracle Integrity Staking
            </h3>
            <p className="mb-4 text-gray-300">
              Participate in <span className="font-semibold">@PythNetwork</span> staking to
              contribute to oracle integrity while earning rewards.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Connect your Solana wallet and get some PYTH tokens from{" "}
                <a
                  href="https://jup.ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  jup.ag
                </a>
              </li>
              <li>
                Go to{" "}
                <a
                  href="https://staking.pyth.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  staking.pyth.network
                </a>
              </li>
              <li>Connect your Solana wallet again.</li>
              <li>
                Click <strong>"Add tokens"</strong>, enter the PYTH amount and confirm.
              </li>
              <li>Choose <strong>Oracle Integrity Staking (OIS)</strong>.</li>
              <li>
                Select a Data Publisher (e.g. <strong>WOO</strong>) and click{" "}
                <strong>Stake</strong>.
              </li>
              <li>
                Enter the amount of PYTH tokens to stake and confirm the transaction.
              </li>
            </ul>
          </div>

          {/* Ambient Finance Section */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">
              ✅ Trade or Deposit to LP Vaults on Ambient Finance
            </h3>
            <p className="mb-4 text-gray-300">
              Use <span className="font-semibold">@ambient_finance</span> to trade and earn
              through liquidity pools across chains.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Visit{" "}
                <a
                  href="https://ambient.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  ambient.finance
                </a>
              </li>
              <li>Connect your wallet and navigate to the "Trade" tab.</li>
              <li>Carry out swaps on any supported chain.</li>
              <li>Go to "Vault" and deposit any token to earn LP rewards.</li>
              <li>You can trade on <strong>Blast</strong> and add LP on <strong>Scroll</strong>.</li>
            </ul>
          </div>

          {/* Discord + Engagement Section */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-300 mb-4">
              ✅ Engage and Earn Flames on Fogo
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Hold a verified role in the{" "}
                <strong>Fogo Discord</strong> to earn <strong>Flames</strong>.
              </li>
              <li>
                Share and engage with content from the{" "}
                <span className="font-semibold">@Fogo</span> main account to increase your Flame score.
              </li>
              <li>
                Weekly distributions are calculated and added to your total, which reflects on the{" "}
                <a
                  href="https://fogo.io/flames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  Fogo leaderboard
                </a>.
              </li>
            </ul>
            <p className="mt-4 text-gray-400 italic">
              The more you stake, trade, and engage — the higher your flame burns 🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
