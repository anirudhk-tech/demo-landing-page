import Web3 from 'web3';

const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        console.log("User is not a MetaMask member.");
    }

    return provider;
};

export const Connect = async () => {
    try {
        const provider = detectProvider();
        if (provider) {
            await provider.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(provider);
            const userAccount = await web3.eth.getAccounts();
            const account = userAccount[0];
            let balance = await web3.eth.getBalance(account);

            return balance.toString();
        }
    } catch (error) {
        console.log("Error connecting wallet: ", error);
    };
};