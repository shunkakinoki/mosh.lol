import { Dialog, Transition } from "@headlessui/react";

import type { FC } from "react";

import { Fragment } from "react";

import { FaqSection } from "@/components/FaqSection";
import { GlowLogo } from "@/components/GlowLogo";
import { useModalWindow } from "@/hooks/useModalWindow";
import LogoImage from "@/public/Logo.png";

export const ModalWindow: FC = () => {
  const [isModalOpen, setModalOpen] = useModalWindow();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        onClose={closeModal}
      >
        <div className="px-3 md:px-4 min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-y-scroll p-6 my-8 w-full md:w-[80%] h-[90vh] md:h-[80vh] text-left align-middle bg-radial from-purple-900 to-indigo-500 rounded-2xl shadow-2xl opacity-95 drop-shadow-2xl transition-all transform">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-200 hover:text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-8 sm:w-10 h-8 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col">
                <GlowLogo src={LogoImage} />
                <div className="flex h-12 sm:h-20 md:h-0" />
                <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-200 to-indigo-300 animate-fade-in-up ">
                  A cross-chain NFT experiment.
                </h1>
                <div className="flex h-12 sm:h-24 md:h-36" />
                <FaqSection title="Summary">
                  <h2 id="-summary-">
                    <strong>Summary</strong>
                  </h2>
                  <p>
                    MoshDAO will generate 1 NFT(=&quot;Mosh&quot;) per day, 3
                    Different networks, on Ethereum($ETH), Arbitrum($ARB), and
                    Polygon($MATIC).
                  </p>
                  <h3 id="-a-daily-auctions-each-day-different-network-">
                    A. Daily auctions - Each day, different network
                  </h3>
                  <p>
                    This will be trustlessly auctioned on the official{" "}
                    <a href="https://app.mosh.lol/">app.mosh.lol</a> website.
                    All proceeds go to the Mosh DAO treasury. We change the
                    network.
                  </p>
                  <ul>
                    <li>Monday: $ETH</li>
                    <li>Tuesday $MATIC</li>
                    <li>Wednesday: $ARB</li>
                    <li>Thursday: $ETH</li>
                    <li>Friday: $MATIC</li>
                    <li>Saturday: $ARB</li>
                  </ul>
                  <h3 id="b-mosh-token-launch-on-juicebox-">
                    B. $MOSH Token Launch on Juicebox
                  </h3>
                  <p>
                    MoshDAO&#39;s governance token, $MOSH Token will be launched
                    on Juicebox. $MOSH will be used to provide liquidity to the
                    Mosh DAO, but also used as a participating right to the Mosh
                    ecosystem. (Proposal, Voting, Community-only meetups, etc.)
                    $MOSH will incentivize the MoshDAO community more open and
                    encourage our community to be more active.
                  </p>
                  <h3 id="c-mosh-dao-governance">C. Mosh DAO governance</h3>
                  <p>Mosh DAO consists of two forms of governance</p>
                  <ol>
                    <li>
                      Mosh Treasury DAO
                      <br />
                      <br /> Only the Mosh NFT holders have the rights to govern
                      the treasury.
                    </li>
                    <br />
                    <li>
                      Mosh Governance DAO <br /> <br /> $MOSH Token holders have
                      a voting right to influence the direction for the project,
                      including derivatives and other spinoffs.
                    </li>
                  </ol>
                </FaqSection>
                <FaqSection title="Main points">
                  <ul>
                    <li>
                      The mosh artwork is not public domain, but spin-offs will
                      be encouraged on the Mosh Governance DAO.
                    </li>
                    <li>
                      1 mosh trustlessly auctioned every 24 hours forever,
                      spanning 3 different networks. (UTC-00:00 to UTC-23:59)
                    </li>
                    <li>
                      100% of mosh auction proceeds are trustlessly sent to Mosh
                      DAO treasury.
                    </li>
                    <li>
                      Mosh treasury will be controlled by governance in the Mosh
                      DAO.
                    </li>
                    <li>
                      Founder of MoshDAO, &#39;Moshers&#39; receives rewards in
                      the form of Mosh NFT. (14.28% of supply for the first 5
                      years)
                    </li>
                  </ul>
                </FaqSection>
                <FaqSection title="Daily Mosh Auctions">
                  <p>
                    This will be trustlessly auctioned on the official{" "}
                    <a href="https://app.mosh.lol/">app.mosh.lol</a> website.
                    All proceeds go to the Mosh DAO treasury. We change the
                    network.
                  </p>
                  <ul>
                    <li>Monday: $ETH</li>
                    <li>Tuesday $MATIC</li>
                    <li>Wednesday: $ARB</li>
                    <li>Thursday: $ETH</li>
                    <li>Friday: $MATIC</li>
                    <li>Saturday: $ARB</li>
                  </ul>
                </FaqSection>
                <FaqSection title="Mosh DAO">
                  <p>
                    Mosh DAO will utilize a fork of the Compound Governance. The
                    Mosh DAO treasury receives 100% of ETH proceeds from daily
                    Mosh auctions. Until the $MOSH token launch, all moshes are
                    equal in terms of voting rights.
                  </p>
                </FaqSection>
                <FaqSection title="Mosh Traits">
                  <p>
                    The rarity of the Moshes are stated{" "}
                    <a
                      href="https://play.mosh.lol"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    .
                  </p>
                  <h4>Mosher Rewards</h4>
                  <p>
                    &#39;Mosher&#39; are the group of 3 builders that initiated
                    Mosher. Here are the Mosher:
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/shunkakinoki"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @shunkakinoki
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/littlemonastar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @littlemonastar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/0xshugo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @0xshugo
                      </a>
                    </li>
                  </ul>
                  <p>
                    Since 100% of the proceedes will go to the Mosh DAO
                    Treasury, every 3rd Mosh will be randomly airdropped to one
                    of the Mosh DAO members (only the Mosher exists at the time
                    of the launch)
                  </p>
                </FaqSection>
                <FaqSection title="Source">
                  <h6>
                    <a
                      href="https://github.com/sentrei/mosh.lol"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </h6>
                </FaqSection>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
