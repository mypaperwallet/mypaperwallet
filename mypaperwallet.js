
type = "text/javascript";
let qrcode = null;
function generateWallet() {
  (document.getElementById("wallet").style.display = "none"),
    (document.getElementById("spinner").style.display = "inline-block");
  var e = {
      name: "Blockchain principal",
      rpcUrl: "https://rpc.coredao.org/",
      chainId: 1116,
      symbol: "CORE",
      explorerUrl: "https://scan.coredao.org",
    },
    e = new ethers.providers.JsonRpcProvider(e.rpcUrl, {
      name: e.name,
      chainId: e.chainId,
    });
  const t = ethers.Wallet.createRandom();
  t.connect(e);
  setTimeout(() => {
    (document.getElementById("spinner").style.display = "none"),
      (document.getElementById("privateKey").textContent = t.privateKey),
      (document.getElementById("address").textContent = t.address),
      (document.getElementById("mnemonic").textContent = t.mnemonic.phrase),
      qrcode
        ? (qrcode.clear(), qrcode.makeCode(t.address))
        : (qrcode = new QRCode(document.getElementById("qrcode"), {
            text: t.address,
            width: 150,
            height: 150,
          })),
      (document.getElementById("wallet").style.display = "block");
  }, 2e3);
}
function printWallet() {
  window.print();
}
function clearWallet() {
  (document.getElementById("privateKey").textContent = ""),
    (document.getElementById("address").textContent = ""),
    (document.getElementById("mnemonic").textContent = ""),
    qrcode && qrcode.clear(),
    (document.getElementById("wallet").style.display = "none");
}
