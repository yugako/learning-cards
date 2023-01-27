export const communicationProtocolsCards = [
  {
    question: 'OSI модель',
    answer: 'OSI model is developed by ISO (International Standard Organization), Its abbreviation for Open Systems Interconnection model. Layers'+
      `</br> <b>Application</b>
Data
High-level APIs, including resource sharing, remote file access
</br> <b>Presentation-</b>
Data
Translation of data between a networking service and an application; including character encoding, data compression, and encryption/decryption
</br> <b>Session -</b>
Data
Managing communication sessions, i.e., a continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes
</br> <b>Transport- </b>
Segment, Datagram
Reliable transmission of data segments between points on a network, including segmentation, acknowledgement, and multiplexing
</br> <b>Network - </b>
Packet
Structuring and managing a multi-node network, including addressing, routing, and traffic control
</br> <b>Data link - </b>
Frame
Reliable transmission of data frames between two nodes connected by a physical layer
</br> <b>Physical - </b>
Bit, Symbol
Transmission and reception of raw bitstreams over a physical medium` +
      `We have cool abrr to rememmer all layers - Please Do Not Tell Secret Password Anyone`,
    category: "communication-protocols"
  },
  {
    question: 'TCP/IP модель',
    answer: 'Its abbreviation for Transfer Control Protocol/Internet Protocol. CP Model is developed by ARPANET (Advanced Research Project Agency Network).<br>' +
      'TCP/IP helps you to determine how a specific computer should be connected to the internet and how you can transmit data between them. It helps you to create a virtual network when multiple computer networks are connected togethe <br>На відміну від (whereless?) OSI It has only 4 Layers: <br>' +
      'Application (Application, Presentation, Session) <br>'+
      `Transport (transport) <br>
       Internet (Network) <br>
       Network access layer (Data link, Physycal)`,
    category: "communication-protocols"

  },
  {
    question: 'Різниця між OSI та TCP/IP',
    answer: '- TCP/IP is designed to solved specific communication problems on specific protocols when OSI is generic protocol independent model' +
      '<br>- In TCP/IP most applications use all of layers when in OSI single apps do not use all. Only 1,2, 3 are mandatory' +
      'OSI header is 5 bytes, whereas TCP/IP header size is 20 bytes.',
    category: "communication-protocols"

  },
  {
    question: 'TCP vs UDP',
    answer: `here are two types of Internet Protocol (IP) traffic. They are TCP or Transmission Control Protocol and UDP or User Datagram Protocol. TCP is connection oriented – once a connection is established, data can be sent bidirectional. UDP is a simpler, connectionless Internet protocol. Multiple messages are sent as packets in chunks using UDP.
    <br>
<table style="border: 1px solid white;
  border-collapse: collapse;" border="1" cellpadding="1" cellspacing="1">
  <tr>
    <th scope="col" style="border: 1px solid white;
  border-collapse: collapse;">TCP</th>
    <th scope="col" style="border: 1px solid white;
  border-collapse: collapse;">UDP</th>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">TCP is suited for applications that require high reliability, and transmission time is relatively less critical.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">UDP is suitable for applications that need fast, efficient transmission, such as games. UDP's stateless nature is also useful for servers that answer small queries from huge numbers of clients.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">TCP rearranges data packets in the order specified.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">UDP has no inherent order as all packets are independent of each other. If ordering is required, it has to be managed by the application layer.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">TCP is slower than UDP.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">UDP is faster because error recovery is not attempted. It is a "best effort" protocol.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">There is absolute guarantee that the data transferred remains intact and arrives in the same order in which it was sent.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">There is no guarantee that the messages or packets sent would reach at all.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">TCP is heavy-weight. TCP requires three packets to set up a socket connection, before any user data can be sent. TCP handles reliability and congestion control.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">UDP is lightweight. There is no ordering of messages, no tracking connections, etc. It is a small transport layer designed on top of IP.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">TCP does error checking and error recovery. Erroneous packets are retransmitted from the source to the destination.</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">UDP does error checking but simply discards erroneous packets. Error recovery is not attempted.</td>
  </tr>
  <tr>
    <td style="border: 1px solid white;
  border-collapse: collapse;">Hadshake SYN, SYN-ACK, ACK</td>
    <td style="border: 1px solid white;
  border-collapse: collapse;">No hadshake</td>
  </tr>
</table>`,
    category: "communication-protocols"

  },
  {
    question: 'Які протоколи юзають TCP,  які UDP',
    answer: 'TCP: HTTP, HTTPs, FTP, SMTP, Telnet <br> UDP:DNS, DHCP, TFTP, SNMP, RIP, VOIP.',
    category: "communication-protocols"
  },
  {
    question: 'Чому коли ми розробляємо аплікейшин, перший файл який прилітає має бути меншим за 14 кілобайт?',
    answer: '',
    category: "communication-protocols"

  },
  {
    question: 'Що таке HTTP протокол. Як працює',
    answer: 'The Hypertext Transfer Protocol (HTTP) is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems.[1] HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen in a web browser.' +
      '<br>HTTPS is an extension of the HTTP protocol built not over HTTP but with a different underlying protocol. HTTP itself is built over TCP, HTTPS - over TLS (Transport Layer Security) protocol, which in its turn built over TCP. So despite its name, we can\'t say TLS is a Transport layer protocol because it\'s a TCP that works at this layer. Rather TLS works at layer 6 - Presentation Layer. So HTTPS in messages semantics is exactly the same as HTTP and can secure a connection thanks to the usage of TLS.' +
      '<br>What can be controlled by HTTP?<br>' +
      '<ul>\n' +
      '<li>\n' +
      '<h4><a id="user-content-caching" class="anchor" aria-hidden="true" href="#caching"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Caching</h4>\n' +
      '<p>How documents are cached can be controlled by HTTP. The server can instruct proxies and clients about what to cache and for how long. The client can instruct intermediate cache proxies to ignore the stored document.</p>\n' +
      '</li>\n' +
      '<li>\n' +
      '<h4><a id="user-content-relaxing-the-origin-constraint" class="anchor" aria-hidden="true" href="#relaxing-the-origin-constraint"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Relaxing the origin constraint</h4>\n' +
      '<p>To prevent snooping and other privacy invasions, Web browsers enforce strict separation between Web sites. Only pages from the same origin can access all the information of a Web page. Though such constraint is a burden to the server, HTTP headers can relax this strict separation on the server-side, allowing a document to become a patchwork of information sourced from different domains; there could even be security-related reasons to do so.</p>\n' +
      '</li>\n' +
      '<li>\n' +
      '<h4><a id="user-content-authentication" class="anchor" aria-hidden="true" href="#authentication"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Authentication</h4>\n' +
      '<p>Some pages may be protected so that only specific users can access them. Basic authentication may be provided by HTTP, either using the WWW-Authenticate and similar headers, or by setting a specific session using HTTP cookies.</p>\n' +
      '</li>\n' +
      '<li>\n' +
      '<h4><a id="user-content-proxy-and-tunneling" class="anchor" aria-hidden="true" href="#proxy-and-tunneling"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Proxy and tunneling</h4>\n' +
      '<p>Servers or clients are often located on intranets and hide their true IP addresses from other computers. HTTP requests then go through proxies to cross this network barrier. Not all proxies are HTTP proxies. The SOCKS protocol, for example, operates at a lower level. Other protocols, like FTP, can be handled by these proxies.</p>\n' +
      '</li>\n' +
      '<li>\n' +
      '<h4><a id="user-content-sessions" class="anchor" aria-hidden="true" href="#sessions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Sessions</h4>\n' +
      '<p>Using HTTP cookies allows you to link requests with the state of the server. This creates sessions, despite basic HTTP being a stateless protocol. This is useful not only for e-commerce shopping baskets but also for any site allowing user configuration of the output.</p>\n' +
      '</li>\n' +
      '</ul>',
    category: "communication-protocols"

  },
  {
    question: 'Порівняти HTTP 1 і HTTP 2 і HTTP 3',
    answer: `From a technical point of view, one of the most significant features that distinguishes HTTP/1.1 and HTTP/2 is the binary framing layer, which can be thought of as a part of the application layer in the internet protocol stack. As opposed to HTTP/1.1, which keeps all requests and responses in plain text format, HTTP/2 uses the binary framing layer to encapsulate all messages in binary format, while still maintaining HTTP semantics, such as verbs, methods, and headers.
    <br>
    <div class="markdown-body">
    <h2>HTTP versions and their features</h2>
    <h3>HTTP 0.9</h3>
    <p>1991</p>
    <ul>
    <li>Client-server, request-response protocol.</li>
    <li>ASCII protocol, running over a TCP/IP link.</li>
    <li>Designed to transfer hypertext documents (HTML).</li>
    <li><strong>The connection between server and client is closed after every request.</strong></li>
    </ul>
    <h3>HTTP/1.0</h3>
    <p>1995</p>
    <ul>
    <li>Versioning information (HTTP/1.0) is now sent within each request</li>
    <li>HTTP headers: both request and response may consist of multiple newline-separated header fields.</li>
    <li>Response object is prefixed with a response status code line.</li>
    <li>Response object is not limited to plain HTML (thanks to the Content-Type header).</li>
    <li><strong>The connection between server and client is closed after every request.</strong></li>
    </ul>
    <h3>
    HTTP/1.1</h3>
    <p>1997</p>
    <ul>
    <li><strong>A connection can be reused.</strong></li>
    <li>Pipelining has been added, allowing to send a second request before the answer for the first one is fully transmitted.</li>
    <li>An average limitation (depends on browser) is a maximum of <strong>6 simultaneously connections per server</strong>.</li>
    <li>Chunked responses (split into 256 bytes) are now also supported.</li>
    <li>Additional cache control mechanisms have been introduced.</li>
    <li>Content negotiation, including language, encoding, or type, has been introduced and allows a client and a server to agree on the most adequate content to exchange.</li>
    <li>Thanks to the Host header, the ability to host different domains at the same IP address now allows server colocation.</li>
    </ul>
    <h3>
    HTTP/2</h3>
    <p>2015</p>
    <ul>
    <li>It is a binary protocol rather than text.</li>
    <li>It is a multiplexed protocol. Parallel requests can be handled over the same connection. Frames are part of streams, and streams are identified by a number. The stream number is present in each frame as a binary field. Streams allow matching requests to responses.</li>
    <li>Due to multiplexing only <strong>1 connection per server</strong> is allowed.</li>
    <li>It compresses headers. As these are often similar among a set of requests.</li>
    <li>Server push: mechanism, allowing the server to send the required resources before they are requested by the client. So by the time the browser finishes parsing HTML, the transfer of CSS or js would have already started or even completed.</li>
    </ul>
    <p>2016</p>
    <ul>
    <li>Support of Alt-Svc allows the dissociation of the identification and the location of a given resource, allowing for a smarter CDN caching mechanism.</li>
    <li>The introduction of Client-Hints allows the browser, or client, to proactively communicate information about its requirements, or hardware constraints, to the server.</li>
    <li>The introduction of security-related prefixes in the Cookie header now helps guarantee a secure cookie has not been altered.</li>
    </ul>
    <h3>
    HTTP/3</h3>
    <p>upcoming</p>
    <ul>
    <li>It is built over QUIC (Quick UDP Internet Connections). On the surface, QUIC is very similar to TCP+TLS+HTTP/2 implemented on UDP</li>
    <li>Dramatically reduced connection establishment time</li>
    <li>Improved congestion control</li>
    <li>Multiplexing without a head of line blocking</li>
    <li>Forward error correction</li>
    <li>Connection migration</li>
    </ul>
    </div>`,
    category: "communication-protocols"

  },
  {
    question: 'HTTP VS HTTPS',
    answer: 'HTTPS vs HTTP<br>' +
      'HTTP lacks a security mechanism to encrypt the data, whereas HTTPS provides TLS Digital Certificate to secure the communication between server and client.<br>' +
      'HTTP operates at an Application Layer, whereas HTTPS operates at Presentation Layer.<br>' +
      'HTTP by default operates on port 80, whereas HTTPS by default operates on port 443.<br>' +
      'HTTP transfers data in plain text while HTTPS transfers data in ciphertext (encrypt text).<br>' +
      'HTTP is fast as compared to HTTPS because HTTPS consumes computation power to encrypt the communication channel.',
    category: "communication-protocols"

  },
  {
    question: 'Різниця між SSL i TLS',
    answer: 'Transport Layer Security (TLS) is the latest version of the Secure Socket Layer (SSL) protocol. Both protocols ensure data privacy and authenticity over the internet. These widely used protocols provide end-to-end security by applying encryption for web-based communication. However, despite the similarities of TLS and SSL, they have significant differences, too.<br>' +
      'the protocols accomplish three fundamental goals of security:<br>' +
      `<ul> <li> <strong>Confidentiality:</strong> Encrypts data to hide it from third parties such that only an intended recipient can view the content. </li> <li> <strong>Integrity:</strong> Applies message authentication code to verify encrypted message content. </li> <li> <strong>Authentication:</strong> Authenticates the website/client/server's identity with the help of a certificate to ensure parties exchanging information cannot back off from their identity. </li> </ul> <br>
   <br>Differences:
<table border="1" cellpadding="1" cellspacing="1"> <thead> <tr> <th scope="col">SSL</th> <th scope="col">TLS</th> </tr> </thead> <tbody> <tr> <td>SSL is a complex protocol to implement.</td> <td>TLS is a simpler protocol.</td> </tr> <tr> <td>SSL has three versions, of which SSL 3.0 is the latest.</td> <td>TLS has four versions, of which the TLS 1.3 version is the latest</td> </tr> <tr> <td>All SSL protocol versions are vulnerable to attacks.</td> <td>TLS protocol offers high security.</td> </tr> <tr> <td>SSL uses a message authentication code (MAC) after message encryption for data integrity</td> <td>TLS uses a hash-based message authentication code in its record protocol.</td> </tr> <tr> <td>SSL uses message digest to create a master secret.</td> <td>TLS employs a pseudo-random function to create a master secret.</td> </tr> </tbody></table>
`,
    category: "communication-protocols"

  },
  {
    question: 'Long pulling & short/ajax pulling',
    answer: 'In Ajax polling, a client makes XHR(XMLHttpRequest)/Ajax requests to the server repeatedly at some regular interval to check for new data. ' +
      '<br> Long polling is a technique where the server elects to hold a client connection open for as long as possible, delivering a response only after data becomes available or timeout threshold has been reached. After receiving a response client immediately sends the next request. On the client-side, only a single request to the server needs to be managed. When the response is received, the client can initiate a new request, repeating this process as many times as necessary.' +
      '<br>' +
      'Some challenges in long polling<br>' +
      'Message ordering and delivery guarantees. Message ordering cannot be guaranteed if the same client opens multiple connections to the server. If the client was not able to receive the message then there will be possible message loss.<br>' +
      'Performance and scaling<br>' +
      'Device support and fallbacks',
    category: "communication-protocols"

  },
  {
    question: 'Server sent events',
    answer: 'Server-Sent Events are a one-way communication channel where events flow from server to client only. Server-Sent Events allows browser clients to receive a stream of events from a server over an HTTP connection without polling.<br>' +
      '<br>' +
      'A client subscribes to a “stream” from a server and the server will send messages (“event-stream”) to the client until the server or the client closes the stream. It is up to the server to decide when and what to send the client, for instance as soon as data changes.<br>' +
      '<br>' +
      'A flow for server send events will be as follows.<br>' +
      '<br>' +
      'Browser client creates a connection using an EventSource API with a server endpoint which is expected to return a stream of events over time. This essentially makes an HTTP request at given URL.<br>' +
      'The server receives a regular HTTP request from the client and opens the connection and keeps it open. The server can now send the event data as long as it wants or it can close the connection if there are no data.<br>' +
      'The client receives each event from the server and process it. If it receives a close signal from the server it can close the connection. The client can also initiate the connection close request.',
    category: "communication-protocols"

  },
  {
    question: 'What is WebRTC?',
    answer: `WebRTC is an HTML5 specification which we can use to add real time media communications directly between browser and devices.
    It's free. It is available in all modern browsers.WebRTC is not limited to only browsers because it is also available for mobile applications.
    WebRTC is not only about for voice or video calling. It is quite powerful because we
    can use it to build a group calling service, add recording to it or use it only for data delivery`,
    category: "communication-protocols"

  },
  {
    question: 'Що таке Web-soketи. Як працюють? Як юзати?',
    answer: 'WebSocket is a computer communication protocol which provides full-duplex communication channels over a single TCP connection.<br>' +
      '<br>' +
      'It is different from HTTP but compatible with HTTP.<br>' +
      'Located at layer 7 in the OSI model and depends on TCP at layer 4.<br>' +
      'Works over port 80 and 443 ( in case of TLS encrypted) and supports HTTP proxies and intermediaries.<br>' +
      'To achieve compatibility, the WebSocket handshake uses Upgrade header to update the protocol to the WebSocket protocol.<br>' +
      'The WebSocket protocol enables interaction between a client and a web server with lesser overheads, providing real-time data transfer from and to the server. WebSockets keeps the connection open, allowing messages to be passed back and forth between the client and the server. In this way, a two-way ongoing conversation can take place between the client and the server.<br>' +
      '<br>' +
      '<br>' +
      'Source: https://www.pubnub.com/blog/<br>' +
      'A WebSocket connection flow will look something like this.<br>' +
      '<br>' +
      'A client initiates a WebSocket handshake process by sending a request which also contains Upgrade header to switch to WebSocket protocol along with other information.<br>' +
      'The server receives WebSocket handshake request and process it.<br>' +
      '2(a). If the server can establish the connection and agrees with client terms then sends a response to the client, acknowledging the WebSocket handshake request with other information.<br>' +
      '<br>' +
      '2(b). If the server can not establish the connection then it sends response acknowledging it cannot establish WebSocket connection.<br>' +
      '<br>' +
      '3. Once the client receives a successful WebSocket connection handshake request, WebSocket connection will be opened. Now, client and servers can start sending data in both directions allowing real-time communication.<br>' +
      '<br>' +
      '4. The connection will be closed once the server or the client decides to close the connection.',
    category: "communication-protocols"

  },
  {
    question: 'Як може закритись конекшин у веб сокеті',
    answer: 'The connection will be closed once the server or the client decides to close the connection.',
    category: "communication-protocols"

  },
  {
    question: 'Які протоколи є стейтфул, а які стейтлес. + навести приклади і чому вони такі',
    answer: 'UPD -stateless<br>' +
      'TCP - statefull<br>' +
      'HTTP - stateless<br>' +
      'Websokets - statefull<br>',
    category: "communication-protocols"

  },
  {
    question: 'HTTP є синхронним чи асинхронним. чому?',
    answer: '',
    category: "communication-protocols"

  },
  {
    question: 'Протоколи веб служб/веб сервісів? Що таке веб сервіс? ',
    answer: '',
    category: "communication-protocols"

  },
  {
    question: 'Що таке JSON RPC?',
    answer: `JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol. Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over http, or in many various message passing environments. It uses JSON (RFC 4627) as data format.<br><br>
      '<ul>
      <li>Transport independent protocol for web services. May work over HTTP as well as over TCP or WebSockets.</li>
      <li>In the case of HTTP works with a single resource (URL) and only one method (POST).</li>
      <li>All instructions (messages) send in a JSON format in a POST body.</li>
      <li>Messages are well specified and more flexible than the usage of HTTP for the same purposes.</li>
      </ul>`,
    category: "communication-protocols"

  },
  {
    question: 'Який метод є обовязковим для JSON RPC? ',
    answer: 'POST',
    category: "communication-protocols"

  },
  {
    question: 'Різниця між POST i GET?',
    answer: `<table border="1" cellpadding="1" cellspacing="1">
  <tr>
    <th scope="col">GET</th>
    <th scope="col">POST</th>
  </tr>
  <tr>
    <td>Parameters remain in browser history because they are part of the URL</td>
    <td>Parameters are not saved in browser history. We are sending them in body</td>
  </tr>
  <tr>
    <td>can send but the parameter data is limited to what we can stuff into the request line (URL). Safest to use less than 2K of parameters, some servers handle up to 64K</td>
    <td>Can send parameters, including uploading files, to the server.</td>
  </tr>
  <tr>
    <td>Easier to hack for script kiddies</td>
    <td>\tMore difficult to hack</td>
  </tr>
  <tr>
    <td>Yes, only ASCII characters allowed.</td>
    <td>No restrictions. Binary data is also allowed.</td>
  </tr>
  <tr>
    <td>Less secured</td>
    <td>POST is a little safer than GET because the parameters are not stored in browser history or in web server logs.</td>
  </tr>
  <tr>
    <td>\tGET method should not be used when sending passwords or other sensitive information.</td>
    <td>POST method used when sending passwords or other sensitive information.</td>
  </tr>
  <tr>
    <td>Can be cached</td>
    <td>Not cached</td>
  </tr>
</table>`,
    category: "communication-protocols"

  },
  {
    question: 'Болючий недолік JSON/RPC',
    answer: 'верне 200 статус навіть якщо еррорка, бо еррорка буде в тілі',
    category: "communication-protocols"

  },
  {
    question: 'XML/RPC',
    answer: '',
    category: "communication-protocols"

  },
  {
    question: 'Що таке REST',
    answer: 'It stands for “Representational State Transfer”, and it is an architectural style for an app programming interface. Simply put, it’s a set of rules that developers follow when they create their API. This helped uncover the full potential of web APIs.' +
      '<br>REST is a software architectural style that defines constraints for organizing web systems.<br>' +
      '<br>' +
      'REST constraints (defines RESTfull services)<br>' +
      'Client-server architecture<br>' +
      'Statelessness<br>' +
      'Cacheability<br>' +
      'Layered system<br>' +
      'Code on demand (optional)<br>' +
      'Uniform interface',
    category: "communication-protocols"

  },
  {
    question: 'CRUD операції',
    answer: 'There is a popular mapping of general computer science operations (mostly applicable to databases) to HTTP methods. <br>' +
      '<table border="1" cellpadding="1" cellspacing="1" role="table">' +
      '<thead>' +
      '<tr>' +
      '<th scope="col">CRUD</th>' +
      '<th scope="col">HTTP Verb</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr>' +
      '<td>CREATE</td>' +
      '<td>POST</td>' +
      '</tr>' +
      '<tr>' +
      '<td>REQUEST</td>' +
      '<td>GET</td>' +
      '</tr>' +
      '<tr>' +
      '<td>UPDATE</td>' +
      '<td>PUT</td>' +
      '</tr>' +
      '<tr>' +
      '<td>DELETE</td>' +
      '<td>DELETE</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      'In this set of methods POST semantically differs from others in IETF specification, so we can meet an approach of usage PUT as CREATE too.' +
      '<br>' +
      'Idempotent HTTP methods<br>' +
      'OPTIONS, GET, HEAD, PUT, DELETE<br>' +
      '<br>' +
      'Safe HTTP methods<br>' +
      'OPTIONS, GET, HEAD<br>' +
      '<br>' +
      'Safe HTTP methods could be cashed (by browser, proxy, gateway server).',
    category: "communication-protocols"

  },
  {
    question: ' Нащо нам боді? чому ми не можемо все передати в квері стрінгу',
    answer: '+ Любий мен ін зе мідл то може все побачити + обмеження по довжині і формату даних',
    category: "communication-protocols"
  },
  {
    question: 'Maturity model',
    answer: '<ol>' +
      '<li>' +
      '<h3><a id="user-content-level-0" class="anchor" aria-hidden="true" href="#level-0"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Level 0</h3>' +
      '<p>One URL, one method</p>' +
      '</li>' +
      '<li>' +
      '<h3><a id="user-content-level-1---resources" class="anchor" aria-hidden="true" href="#level-1---resources"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Level 1 - Resources</h3>' +
      '<p>Multiple URLs (resources), one method</p>' +
      '</li>' +
      '<li>' +
      '<h3><a id="user-content-level-2---http-verbs" class="anchor" aria-hidden="true" href="#level-2---http-verbs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Level 2 - HTTP Verbs</h3>' +
      '<p>Multiple URLs, multiple methods (HTTP Verbs, HTTP semantic methods)</p>' +
      '</li>' +
      '<li>' +
      '<h3><a id="user-content-level-3---hypermedia-controls-or-hateoas-hypertext-as-the-engine-of-application-state" class="anchor" aria-hidden="true" href="#level-3---hypermedia-controls-or-hateoas-hypertext-as-the-engine-of-application-state"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Level 3 - Hypermedia Controls or HATEOAS (Hypertext As The Engine Of Application State)</h3>' +
      '<p>All from level 2, plus an ability API of self-documenting (GET requests can return a list of URLs with possible actions)</p>' +
      '</li>' +
      '</ol>',
    category: "communication-protocols"

  },
  {
    question: 'Коли треба прагнути до 4 рівня, коли нам достатньо 3, а коли другого? (maturity level)',
    answer: `Залежить від розміру і довгостроковості проекту +гуд для аплікух які є в мережах зі слабкою мережею. + від типу додатку чи то веб сервіс чи щось локально.
    <br> Варто йти до 4 рівня, якщо у вас публічне апі, якщо у вас локальне, то достаньо 3, бо 4 важкий`,
    category: "communication-protocols"

  },
  {
    question: 'HATEOAS Driven REST APIs',
    answer: ``,
    category: "communication-protocols"

  },
  {
    question: 'Недоліки REST',
    answer: ``,
    category: "communication-protocols"

  },
  {
    question: 'REST vs SOAP',
    answer: ``,
    category: "communication-protocols"

  },
  {
    question: 'Що таке GraphQL. Pros & Cons',
    answer: `GraphQL is a language for querying data. Unlike most query languages (such as SQL), you don’t use GraphQL to query a particular type of data store (such as a MySQL database). Instead, you use GraphQL to query data from any number of different sources.
    <br>GraphQL is a query language and a server-side runtime (typically served over HTTP).
    <br>The runtime part points to the fact that a GraphQL API runs on a server.
    In a GraphQL API, we shape our data within a strictly typed schema, telling it how to resolve data when asked for. To GraphQL, where data comes from doesn’t matter. It could be from a database, micro-service, or even an underlying RESTful API.
    <br>Known problems <br>
    <ul>
    <li>
    <strong>Authorization</strong>. Not implemented from the box. It's not evident how to implement it properly. As for identification, JWT is a common choice.</li>
    <li>
    <strong>N+1 problem</strong>. With nesting, requests may affect performance getting information by separate requests to the DB. To overcome, it may use the <strong>DataLoader</strong> utility. DataLoader batches requests and caches the results.</li>
    <li>
    <strong>API complexity</strong>. Bad GraphQL API is much worse than a bad REST API. It's a great effort to build a good one.</li>
    <li>
    <strong>Bundle size</strong>. GraphQL requests include in the bundle.</li>
    <li>
    <strong>Versioning</strong>. There is no out-of-the-box solution for it.</li>
    </ul><br>A simple GraphQL server comes without a built-in caching or batching mechanism.
    <br>Since in GraphQL there is no built-in solution, the developer also needs to handle pagination and authorization.
    Unlike GraphQL, the great advantage of REST API is that it's pretty clear and easy to understand. It’s highly scalable, simple, and easy to modify and extend.
    <br>
    React framework Gatsby uses GraphQL. верне 200 статус навіть якщо еррорка, бо треба хендлити вручну. Завжди шлеться тільки POST request`,
    category: "communication-protocols"

  },
  {
    question: 'Що таке Reverse Proxy?',
    answer: `Privatbank example, CORS example`,
    category: "communication-protocols"

  },
  {
    question: 'What\'s Open API?',
    answer: `The OpenAPI Specification is a standard format to define structure and syntax REST APIs. OpenAPI documents are both machine and human-readable, which enables anyone to easily determine how each API works. Engineers building APIs can use APIs to plan and design servers, generate code and implement contract testing. Former Swagger specification.
<br>
Pros <br>
Generate accurate documentation<br>
Create stub code for API development<br>
Build mock servers to prototype the interface<br>
Test that API requests and responses match the intended contract`,
    category: "communication-protocols"

  },
  {
    question: 'Whats Swagger?',
    answer: `Set of tools for work with OpenAPI.
<br>
Tools<br>
Swagger Editor - API editor for designing APIs with the OpenAPI Specification<br>
Swagger UI - Visualize OpenAPI Specification definitions in an interactive UI<br>
Swagger Codegen - Generate server stubs and client SDKs from OpenAPI Specification definitions
<br><br>
Known limitations<br>
Cannot be used for documenting APIs with one URL and one method (level 0 from the Richardson Maturity Model HTTP), e.g., JSON-RPC`,
    category: "communication-protocols"

  },
  {
    question: 'What is apiDoc?',
    answer:`It positions itself as Inline Documentation for RESTful web APIs. apiDoc creates documentation from API annotations in your source code.
<br><br>
Pros<br>
It generates an API web page as structured documentation.<br>
It supports versioning and comparison between versions.<br>
You possibly may use it with JSON-RPC as well.<br><br>
Cons<br>
As far as I got from their presentation, support only Code first approach.<br>
It's Less powerful than Swagger tools.`,
    category: "communication-protocols"

  },
  {
    question: 'В чому різниця Open API і Swagger?',
    answer: `
Open API це специфікація - описує формат даних,
Swagger - це тула яка дозволяє генерити специфікацію і юзати її`,
    category: "communication-protocols"
  },
  {
    question: 'What is Postman? How to use?',
    answer: 'Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated. <br>' +
      'Postman is an application that allows us to test APIs utilizing a graphical user interface. <br>' +
      'Some of Postman’s advantages include the collection feature and the possibility to create different testing environments. <br>' +
      'Postman is a user-friendly tool that helps us optimize our time when executing tests.',
    category: "communication-protocols"

  },
  {
    question: 'How to organize work with backend and frontend. Approaches',
    answer: `Contract-first/code-first
Ми можемо робити версії Апішки також
+ є різні падходи версійності (але це більш бекендне + це додаткове комплексіті, а це боль)`,
    category: "communication-protocols"

  },
  {
    question: 'Contract-first/code-first',
    answer: 'Contract First<br><br>' +
      'Pros<br>' +
      'parallel work<br>' +
      'possible code generation (stubs, mocks)<br>' +
      'higher level of abstraction, less implementation-specific details<br>' +
      'better design and easier code reusing<br>' +
      'Cons<br>' +
      'more effort on start<br>' +
      'extra costs to maintaining and updating a contract<br><br><br>' +
      'Code First<br><br>' +
      'Pros<br>' +
      'easy to get a contract with generation from code<br>' +
      'auto-sync between contract and code with contract generation<br>' +
      'Cons<br>' +
      'no parallel work<br>' +
      'more chaotic contract<br>' +
      'higher coupling with implementation details (programming language, platform)',
    category: "communication-protocols"
  },
];
