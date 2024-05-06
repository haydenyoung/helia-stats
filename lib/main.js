let helia

const connectedPeers = [];

function addConnectedPeer(item) {
  var index = connectedPeers.indexOf(item);
  if (index === -1) {
    connectedPeers.push(item);
    updateConnectedPeers();
  }
}

function removeConnectedPeer(item) {
  var index = connectedPeers.indexOf(item);
  if (index !== -1) {
    connectedPeers.splice(index, 1);
    updateConnectedPeers();
  }
}

function updateConnectedPeers() {
  var ul = document.querySelector("#heliaStatsConnectedPeers");

  ul.innerHTML = "";

  for (var i = 0; i < connectedPeers.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(connectedPeers[i]));
    ul.appendChild(li);
  }
  
  document.querySelector("#heliaStatsConnectedPeersCount").innerHTML = `(${connectedPeers.length})`
}

window.addEventListener("load", (event) => {
  helia = globalThis.helia
  document.querySelector("#heliaStatsPeerId").innerHTML = helia.libp2p.peerId.toString()
  helia.libp2p.addEventListener("peer:connect", (event) => {
    addConnectedPeer(event.detail.toString());
  });

  helia.libp2p.addEventListener("peer:disconnect", (event) => {
    removeConnectedPeer(event.detail.toString());
  });
})

document.querySelector('#heliaStats').innerHTML = `
  <h1>Helia Statistics</h1>
  <h2>Peer Id</h2>
  <div id="heliaStatsPeerId"></div>
  <h2>Connected Peers&nbsp;<span id=heliaStatsConnectedPeersCount></span></h2>
  <ul id="heliaStatsConnectedPeers"></ul>`