export const securityCards = [
  {
    question: 'Man in the middle attack (MITM)',
    answer: `The MITM is an attack with an interceptor in between two communicating hosts.<br> <br>
    Types:<br>
    <ul>
    <li>
    <p><strong>Rogue Access Point.</strong> Devices equipped with wireless cards will often try to auto-connect to the access point that is emitting the strongest signal. Attackers can set up their own wireless access point and trick nearby devices to join its domain.</p>
    </li>
    <li>
    <p><strong>ARP Spoofing.</strong> It is used to resolve Network layer (Layer 3) addresses to Link layer (Layer 2) addresses in a local area network. Most often it's IP address to MAC (media access control) address. When a host needs to talk to a host with a given IP address, it references the ARP cache to resolve the IP address to a MAC address. If the address is not known, a request is made asking for the MAC address of the device with the IP address.</p>
    </li>
    <li>
    <p><strong>mDNS Spoofing.</strong> Multicast DNS is similar to DNS, but it’s done on a local area network (LAN) using a broadcast like ARP. This makes it a perfect target for spoofing attacks. Devices such as TVs, printers, and entertainment systems make use of this protocol since they are typically on trusted networks.</p>
    </li>
    <li>
    <p><strong>DNS Spoofing.</strong> Similar to the way ARP resolves IP addresses to MAC addresses on a LAN, DNS resolves domain names to IP addresses. When using a DNS spoofing attack, the attacker attempts to introduce corrupt DNS cache information to a host in an attempt to access another host using their domain name.</p>
    </li>
    </ul>`,
    category: "security"

  },
  {
    question: 'Які є методи засоби для взлому MITM',
    answer: `Attack techniques <br>
    <ul>
    <li>
    <p><strong>Sniffing.</strong> Attackers use packet capture tools to inspect packets at a low level. Using specific wireless devices that are allowed to be put into monitoring or promiscuous mode can allow an attacker to see packets that are not intended for it to see, such as packets addressed to other hosts.</p>
    </li>
    <li>
    <p><strong>Packet Injection.</strong> An attacker can also leverage their device’s monitoring mode to inject malicious packets into data communication streams. Packet injection usually involves first sniffing to determine how and when to craft and send packets.</p>
    </li>
    <li>
    <p><strong>Session Hijacking.</strong> Most web applications use a login mechanism that generates a temporary session token to use for future requests to avoid requiring the user to type a password on every page. An attacker can sniff sensitive traffic to identify the session token for a user and use it to make requests as the user.</p>
    </li>
    <li>
    <p><strong>SSL Stripping.</strong> The SSL Strip takes advantage of the way most users come to SSL websites. The majority of visitors connect to a website’s page that redirects through a 302 redirect, or they arrive on an SSL page via a link from a non-SSL site. If the victim wants, for instance, to buy a product and types the URL <a href="http://www.buyme.com" rel="nofollow">www.buyme.com</a> in the address bar, the browser connects to the attacker's machine and waits for a response from the server. In an SSL Strip, the attacker, in turn, forwards the victim’s request to the online shop’s server and receives the secure HTTPS payment page. For example <a href="https://www.buyme.com" rel="nofollow">https://www.buyme.com</a>. At this point, the attacker has complete control over the secure payment page. He downgrades it from HTTPS to HTTP and sends it back to the victim’s browser. The browser is now redirected to <a href="http://www.buyme.com" rel="nofollow">http://www.buyme.com</a>. From now onward, all the victim’s data will be transferred in plain text format, and the attacker will be able to intercept it.</p>
    </li>
    </ul>`,
    category: 'security'
  },
  {
    question: 'Як превентнути MITM атаку',
    answer: `How to prevent: <br>
    <ul>
    <li>
    <p><strong>Strong WEP/WAP Encryption on Access Points.</strong> The stronger the encryption implementation, the safer.</p>
    </li>
    <li>
    <p><strong>Strong Router Login Credentials.</strong> It’s essential to make sure your default router login is changed.</p>
    </li>
    <li>
    <p><strong>Virtual Private Network.</strong> Even if an attacker happens to get on a network that is shared, he will not be able to decipher the traffic in the VPN.</p>
    </li>
    <li>
    <p><strong>Force HTTPS.</strong> Websites should only use HTTPS and not provide HTTP alternatives. Users can install browser plugins to enforce always using HTTPS on requests.</p>
    </li>
    <li>
    <p><strong>Public Key Pair Based Authentication.</strong> Man-in-the-middle attacks typically involve spoofing something or another. Public key pair based authentication like RSA can be used in various layers of the stack to help ensure whether the things you are communicating with are actually the things you want to be communicating with.</p>
    </li>
    </ul>`,
    category: "security"
  },
  {
    question: 'Принцип нульової довіри.',
    answer: `Zero trust is a security strategy that assumes all users, devices and transactions are already compromised.`,
    category: "security"
  },
  {
    question: 'Що таке CORS',
    answer: `Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
    <br><br>
    Same-Origin Policy<br>
    The same-origin policy is a security mechanism that generally restricts how a script (javaScript) on some web page (one origin) can interact with a different web page (another origin).
    <br>
    The origin is a combination of a protocol, host and port of a web-page URL. The same-origin means: identical protocol (e.g., https), identical host (e.g. mail.google.com), and identical port (e.g. 80).
    <br>
    The same-origin policy is oriented mostly against embedding legal web pages into criminals' web pages, making fake banking sites, for example. Legal sites may be totally mocked (e.g., via iframe) or some of their functionality may be borrowed with help of hidden elements, like buttons, forms.
    <br>
    The same-origin policy doesn't prevent embedding cross-origin scripts, images, forms, iframes. It only will be forbidden by default for any script on a web page to read any cross-origin resources such as iframe (data from it), image (loading to a canvas or background) and to make requests to cross-origin APIs.
    <br>
    The protection of something like malicious image src attribute is not a same-origin policy business. It's up to Content Security Policy.`,
    category: "security"
  },
  {
    question: 'Які обмеження ми можемо встановити використовуючи CORS',
    answer: `
      <div class="markdown-body">
      <h2>
      CORS as a way to lose same-origin restrictions</h2>
      <p>To say a browser not to limit scripts on particular or any web pages in communications with cross-origin APIs CORS mechanism was introduced. So, CORS is only a (relatively) safe method to workaround with the same-origin policy.</p>
      <p>CORS mostly is represented by the group of headers sent by either server or browser.</p>
      <h2>
      Server-side</h2>
      <p>It's always a server that sets up and controls CORS. Browser only automatically checks CORS settings.</p>
      <h3>
      Headers</h3>
      <ul>
      <li>
      <strong>Access-Control-Allow-Origin</strong>: &lt;origin&gt; | *</li>
      <li>Access-Control-Expose-Headers</li>
      <li>Access-Control-Max-Age</li>
      <li>Access-Control-Allow-Credentials</li>
      <li>Access-Control-Allow-Methods</li>
      <li>Access-Control-Allow-Headers</li>
      </ul>
      <h2>
      Browser side</h2>
      <p>All cross-origin requests may be divided into two groups.</p>
      <h3>
      Simple cross-origin requests</h3>
      <p>They should satisfy the following conditions.</p>
      <ol>
      <li>Allowed methods:
      <ul>
      <li><strong>GET</strong></li>
      <li><strong>HEAD</strong></li>
      <li><strong>POST</strong></li>
      </ul>
      </li>
      <li>Allowed headers:
      <ul>
      <li><strong>Accept</strong></li>
      <li><strong>Accept-Language</strong></li>
      <li><strong>Content-Language</strong></li>
      <li>
      <strong>Content-Type</strong> with one of following values:
      <ul>
      <li>application/x-www-form-urlencoded</li>
      <li>multipart/form-data</li>
      <li>text/plain</li>
      </ul>
      </li>
      </ul>
      </li>
      <li>And some limitations for the XMLHttpRequest.</li>
      </ol>
      <h3>
      Preflighted cross-origin requests</h3>
      <p>Any other than simple requests.</p>
      <p>Browser preflight such a request with an extra request using the OPTIONS method. From a response to it browser gets to know the CORS settings of the cross-origin server.</p>
              </div>
    `,
    category: "security"
  },
  {
    question: 'За допомогою якого метода відправляється Preflight request.',
    answer: `OPTIONS`,
    category: 'security'
  },
  {
    question: 'Що таке OWASP TOP 10. Перерахувати їх.',
    answer: `The Open Web Application Security Project (OWASP) is an open community dedicated to enabling organizations to develop, purchase, and maintain applications and APIs that can be trusted.<br>
      Top 10 vulnerabilities according to OWASP TOP 10 are : <br>
      Broken Access Control<br>
      Cryptographic Failures or older name Sensitive Data Exposure<br>
      Injection<br>
      Insecure Design<br>
      Security Misconfiguration <br>
      Vulnerable and Outdated Components <br>
      Identification and Authentication Failures <br>
      Software and Data Integrity Failures <br>
      Security Logging and Monitoring Failures  <br>
      Server-Side Request Forgery `,
    category: 'security'
  },
  {
    question: 'З якими ішьюсами стикалась на проекті.',
    answer: ``,
    category: 'security'
  },
  {
    question: 'Що таке інджекшини. Як їх превентати?',
    answer: `
    Injection (SQL, NoSQL, LDAP, OS) occurs when untrusted data is sent to an interpreter as part of a command or query. Filtering and validating untrusted input, escaping special characters are effective protective measures. <br>
    An application is vulnerable to attack when:
    <ul>
      <li>
      <p>User-supplied data is not validated, filtered, or sanitized by the
      application.</p>
      </li>
      <li>
      <p>Dynamic queries or non-parameterized calls without context-aware
      escaping are used directly in the interpreter.</p>
      </li>
      <li>
      <p>Hostile data is used within object-relational mapping (ORM) search
      parameters to extract additional, sensitive records.</p>
      </li>
      <li>
      <p>Hostile data is directly used or concatenated. The SQL or command
      contains the structure and malicious data in dynamic queries,
      commands, or stored procedures.</p>
      </li>
      </ul>
      <br>
      How to Prevent:
      <ul>
      <li>
      <p>The preferred option is to use a safe API, which avoids using the
      interpreter entirely, provides a parameterized interface, or
      migrates to Object Relational Mapping Tools (ORMs).<br>
      <strong>Note:</strong> Even when parameterized, stored procedures can still introduce
      SQL injection if PL/SQL or T-SQL concatenates queries and data or
      executes hostile data with EXECUTE IMMEDIATE or exec().</p>
      </li>
      <li>
      <p>Use positive server-side input validation. This is
      not a complete defense as many applications require special
      characters, such as text areas or APIs for mobile applications.</p>
      </li>
      <li>
      <p>For any residual dynamic queries, escape special characters using
      the specific escape syntax for that interpreter.<br>
      <strong>Note:</strong> SQL structures such as table names, column names, and so on
      cannot be escaped, and thus user-supplied structure names are
      dangerous. This is a common issue in report-writing software.</p>
      </li>
      <li>
      <p>Use LIMIT and other SQL controls within queries to prevent mass
      disclosure of records in case of SQL injection.</p>
      </li>
      </ul>
    `,
    category: 'security'
  },
  {
    question: 'Як захиститись від фішингу (phishing)?',
    answer: `
    <ol>
      <li>Always check the link before clicking. Hover over it to preview the URL, and look carefully for misspelling or other irregularities.</li>
      <li>Enter your username and password only over a secure connection. Look for the “https” prefix before the site URL, indicating the connection to the site is secure.</li>
      </ol>
    <ol start="3">
    <li>Even if a message or a letter came from one of your best friends, remember that they could also have been fooled or hacked. That’s why you should remain cautious in any situation. Even if a message seems friendly, treat links and attachments with suspicion.</li>
    <li>Messages from official organizations, such as banks, tax agencies, online shops, travel agencies, airlines, and so on, also require scrutiny. Even internal messages from your own office. It’s simply not that hard to fabricate a fake letter that looks like a real one.</li>
    </ol>
    <ol start="5">
    <li>Sometimes e-mails and websites look just like real ones. It depends on how well the criminals&nbsp;did their homework. But the hyperlinks, most likely, will be incorrect — with spelling mistakes, or they can redirect&nbsp;you to a different place.</li>
    <li>It’s better not to follow links from e-mails at all. Instead you can open a new tab or window and enter the URL of your bank or other destination manually.</li>
    </ol>
    <ol start="7">
      <li>If you discover a phishing campaign, report it to the bank, the support desk of your social media network, or whatever other entity the phishing message claims to represent. Reporting really helps in the pursuit of criminals.</li>
      <li>Avoid logging in to online banks and similar services via public Wi-Fi networks. Hotspots are convenient, but it’s better to use a mobile connection or wait to get to a secure network&nbsp;than to lose all of the money on your credit card or in your bank account. Open networks can be created by criminals&nbsp;who, among other things, spoof website addresses over the connection and thereby redirect you to a fake page.</li>
      </ol>
      <ol start="9">
      <li>Do not open unexpected files sent by you massively multiplayer online role-playing game comrades or other online buddies. They may be malicious ransomware or even spyware, just like attachments from official-looking e-mails. So be vigilant!</li>
      </ol>
   `,
    category: 'security'
  },
  {
    question: 'XSS атака. Що це? Її види, як захиститись (як юзер і як дев)?',
    answer: `Cross-site scripting (XSS) is a code injection attack that allows an attacker to execute malicious JavaScript in another user's browser.
      <br>
      The attacker does not directly target his victim. Instead, he exploits a vulnerability in a website that the victim visits, in order to get the website to deliver the malicious JavaScript for him. To the victim's browser, the malicious JavaScript appears to be a legitimate part of the website, and the website has thus acted as an unintentional accomplice to the attacker.`
      + `<br>
       <b>Types of XSS</b>
       While the goal of an XSS attack is always to execute malicious JavaScript in the victim's browser, there are few fundamentally different ways of achieving that goal. XSS attacks are often divided into three types:
       <ul>
            <li>
                <p><strong>Persistent XSS</strong>, where the malicious string originates from the website's database.</p>
            </li>
            <li>
                <p><strong>Reflected XSS</strong>, where the malicious string originates from the victim's request.</p>
            </li>
            <li>
                <p><strong>DOM-based XSS</strong>, where the vulnerability is in the client-side code rather than the server-side code.</p>
            </li>
        </ul>
        <br>
        <br>
        <b>Persistent XSS:</b> where the malicious string originates from the website's database. The HTML code will be referred to as the malicious string or the malicious script. It is important to note that the string itself is only malicious if it ultimately gets parsed as HTML in the victim's browser, which can only happen as the result of an XSS vulnerability in the website.
        <br>
        <ol>
            <li>
                <p>The attacker uses one of the website's forms to insert a malicious string into the website's database.</p>
            </li>
            <li>
                <p>The victim requests a page from the website.</p>
            </li>
            <li>
                <p>The website includes the malicious string from the database in the response and sends it to the victim.</p>
            </li>
            <li>
                <p>The victim's browser executes the malicious script inside the response, sending the victim's cookies to the attacker's server.</p>
            </li>
        </ol>
        <br><br>
        <b>Reflected XSS:</b> where the malicious string originates from the victim's request to the website. The website then includes this malicious string in the response sent back to the user.
        <br>
        <ol>
            <li><p>The attacker crafts a URL containing a malicious string and sends it to the victim.</p></li>
            <li><p>The victim is tricked by the attacker into requesting the URL from the website.</p></li>
            <li><p>The website includes the malicious string from the URL in the response.</p></li>
            <li><p>The victim's browser executes the malicious script inside the response, sending the victim's cookies to the attacker's server.</p></li>
        </ol>
        <br><br>
        <b>DOM-based XSS:</b> where the vulnerability is in the client-side code rather than the server-side code. DOM-based XSS is a variant of both persistent and reflected XSS. In a DOM-based XSS attack, the malicious string is not actually parsed by the victim's browser until the website's legitimate JavaScript is executed.
        <br>
        <ol>
            <li><p>The attacker crafts a URL containing a malicious string and sends it to the victim.</p></li>
            <li><p>The victim is tricked by the attacker into requesting the URL from the website.</p></li>
            <li><p>The website receives the request, but does not include the malicious string in the response.</p></li>
            <li><p>The victim's browser executes the legitimate script inside the response, causing the malicious script to be inserted into the page.</p></li>
            <li><p>The victim's browser executes the malicious script inserted into the page, sending the victim's cookies to the attacker's server.</p></li>
        </ol>
        `,
    category: 'security'
  },
  {
    question: 'Vulnerable and Outdated Components атака. Як щоб превентати?',
    answer: `Applications and APIs using components with known vulnerabilities may undermine application defences and enable various attacks and impacts. Avoid weird stuff from untrusted sources which you often do not need and if you can't - keep it up-to-date and use automated tools to validate the sources.
    <br><br>
        You are volnurable if :
        <br>
        <ul>
          <li>
          <p>If you do not know the versions of all components you use (both
          client-side and server-side). This includes components you directly
          use as well as nested dependencies.</p>
          </li>
          <li>
          <p>If the software is vulnerable, unsupported, or out of date. This
          includes the OS, web/application server, database management system
          (DBMS), applications, APIs and all components, runtime environments,
          and libraries.</p>
          </li>
          <li>
          <p>If you do not scan for vulnerabilities regularly and subscribe to
          security bulletins related to the components you use.</p>
          </li>
          <li>
          <p>If you do not fix or upgrade the underlying platform, frameworks,
          and dependencies in a risk-based, timely fashion. This commonly
          happens in environments when patching is a monthly or quarterly task
          under change control, leaving organizations open to days or months
          of unnecessary exposure to fixed vulnerabilities.</p>
          </li>
          <li>
          <p>If software developers do not test the compatibility of updated,
          upgraded, or patched libraries.</p>
          </li>
          </ul>

          <br>
          How to prevent: <br>
          <ul>
          <li>
          <p>Remove unused dependencies, unnecessary features, components, files,
          and documentation.</p>
          </li>
          <li>
          <p>Continuously inventory the versions of both client-side and
          server-side components (e.g., frameworks, libraries) and their
          dependencies using tools like versions, OWASP Dependency Check,
          retire.js, etc. Continuously monitor sources like Common Vulnerability and
          Exposures (CVE) and National Vulnerability Database (NVD) for
          vulnerabilities in the components. Use software composition analysis
          tools to automate the process. Subscribe to email alerts for
          security vulnerabilities related to components you use.</p>
          </li>
          <li>
          <p>Only obtain components from official sources over secure links.
          Prefer signed packages to reduce the chance of including a modified,
          malicious component (See A08:2021-Software and Data Integrity
          Failures).</p>
          </li>
          <li>
          <p>Monitor for libraries and components that are unmaintained or do not
           create security patches for older versions. If patching is not
          possible, consider deploying a virtual patch to monitor, detect, or
          protect against the discovered issue.</p>
          </li>
          </ul>
    `,
    category: 'security'
  },
  {
    question: 'Які є тули щоб превентати секюріті ішьюс? Статік енд динамік секюріті чек?',
    answer: `SonarQube - статичний <br>
      BluckDuck i VeraCode - динамічний<br><br>
      Статичний - без запуску код<br>
      Динамічний - в ран таймі`,
    category: 'security'
  },
  {
    question: 'Broken Access Control атака? Як превентати?',
    answer: `Broken Access Control (Broken Authorization) It's typically wrong implemented, forgotten or incomplete control of authorized user's privileges. Use the following advices: with the only exception of public APIs deny all by default, implement access control mechanism, restrict access on OS level, log failures, invalidate tokens on a server.
      <br> <br>
      Volnurabilities include:<br>
      <ul>
      <li>
      <p>Violation of the principle of least privilege or deny by default,
      where access should only be granted for particular capabilities,
      roles, or users, but is available to anyone.</p>
      </li>
      <li>
      <p>Bypassing access control checks by modifying the URL (parameter
      tampering or force browsing), internal application state, or the
      HTML page, or by using an attack tool modifying API requests.</p>
      </li>
      <li>
      <p>Permitting viewing or editing someone else's account, by providing
      its unique identifier (insecure direct object references)</p>
      </li>
      <li>
      <p>Accessing API with missing access controls for POST, PUT and DELETE.</p>
      </li>
      <li>
      <p>Elevation of privilege. Acting as a user without being logged in or
      acting as an admin when logged in as a user.</p>
      </li>
      <li>
      <p>Metadata manipulation, such as replaying or tampering with a JSON
      Web Token (JWT) access control token, or a cookie or hidden field
      manipulated to elevate privileges or abusing JWT invalidation.</p>
      </li>
      <li>
      <p>CORS misconfiguration allows API access from unauthorized/untrusted
      origins.</p>
      </li>
      <li>
      <p>Force browsing to authenticated pages as an unauthenticated user or
      to privileged pages as a standard user.</p>
      </li>
      </ul>
      <br>
      How to prevent:
      <br>
      <ul>
        <li>
        <p>Except for public resources, deny by default.</p>
        </li>
        <li>
        <p>Implement access control mechanisms once and re-use them throughout
        the application, including minimizing Cross-Origin Resource Sharing (CORS) usage.</p>
        </li>
        <li>
        <p>Model access controls should enforce record ownership rather than
        accepting that the user can create, read, update, or delete any
        record.</p>
        </li>
        <li>
        <p>Unique application business limit requirements should be enforced by
        domain models.</p>
        </li>
        <li>
        <p>Disable web server directory listing and ensure file metadata (e.g.,
        .git) and backup files are not present within web roots.</p>
        </li>
        <li>
        <p>Log access control failures, alert admins when appropriate (e.g.,
        repeated failures).</p>
        </li>
        <li>
        <p>Rate limit API and controller access to minimize the harm from
        automated attack tooling.</p>
        </li>
        <li>
        <p>Stateful session identifiers should be invalidated on the server after logout.
        Stateless JWT tokens should rather be short-lived so that the window of
        opportunity for an attacker is minimized. For longer lived JWTs it's highly recommended to
        follow the OAuth standards to revoke access.</p>
        </li>
        </ul>
      `,
    category: 'security'
  },
  {
    question: 'Sensitive Data Exposure (old name). Cryptographic Failures атака. Як превентати?',
    answer: `Sensitive Data Exposure revealing such data as financial, healthcare, PII. With such data, attackers may conduct credit card fraud, identity theft, or other crimes. To protect: first, classify data processed, stored or transmitted, second, don't store them unnecessarily, third encrypt them properly either at rest or in transit.<br>
      <br>
        For all such data:
        <ul>
        <li>
        <p>Is any data transmitted in clear text? This concerns protocols such
        as HTTP, SMTP, FTP also using TLS upgrades like STARTTLS. External
        internet traffic is hazardous. Verify all internal traffic, e.g.,
        between load balancers, web servers, or back-end systems.</p>
        </li>
        <li>
        <p>Are any old or weak cryptographic algorithms or protocols used either
        by default or in older code?</p>
        </li>
        <li>
        <p>Are default crypto keys in use, weak crypto keys generated or
        re-used, or is proper key management or rotation missing?
        Are crypto keys checked into source code repositories?</p>
        </li>
        <li>
        <p>Is encryption not enforced, e.g., are any HTTP headers (browser)
        security directives or headers missing?</p>
        </li>
        <li>
        <p>Is the received server certificate and the trust chain properly validated? </p>
        </li>
        <li>
        <p>Are initialization vectors ignored, reused, or not generated
        sufficiently secure for the cryptographic mode of operation?
        Is an insecure mode of operation such as ECB in use? Is encryption
        used when authenticated encryption is more appropriate?</p>
        </li>
        <li>
        <p>Are passwords being used as cryptographic keys in absence of a
        password base key derivation function?</p>
        </li>
        <li>
        <p>Is randomness used for cryptographic purposes that was not designed
        to meet cryptographic requirements? Even if the correct function is
        chosen, does it need to be seeded by the developer, and if not, has
        the developer over-written the strong seeding functionality built into
        it with a seed that lacks sufficient entropy/unpredictability?</p>
        </li>
        <li>
        <p>Are deprecated hash functions such as MD5 or SHA1 in use, or are
        non-cryptographic hash functions used when cryptographic hash functions
        are needed?</p>
        </li>
        <li>
        <p>Are deprecated cryptographic padding methods such as PKCS number 1 v1.5
        in use?</p>
        </li>
        <li>
        <p>Are cryptographic error messages or side channel information
        exploitable, for example in the form of padding oracle attacks?</p>
        </li>
        </ul>
        <br>
        How to prevent:
        <br>
        <ul>
          <li>
          <p>Classify data processed, stored, or transmitted by an application.
          Identify which data is sensitive according to privacy laws,
          regulatory requirements, or business needs.</p>
          </li>
          <li>
          <p>Don't store sensitive data unnecessarily. Discard it as soon as
          possible or use PCI DSS compliant tokenization or even truncation.
          Data that is not retained cannot be stolen.</p>
          </li>
          <li>
          <p>Make sure to encrypt all sensitive data at rest.</p>
          </li>
          <li>
          <p>Ensure up-to-date and strong standard algorithms, protocols, and
          keys are in place; use proper key management.</p>
          </li>
          <li>
          <p>Encrypt all data in transit with secure protocols such as TLS with
          forward secrecy (FS) ciphers, cipher prioritization by the
          server, and secure parameters. Enforce encryption using directives
          like HTTP Strict Transport Security (HSTS).</p>
          </li>
          <li>
          <p>Disable caching for response that contain sensitive data.</p>
          </li>
          <li>
          <p>Apply required security controls as per the data classification.</p>
          </li>
          <li>
          <p>Do not use legacy protocols such as FTP and SMTP for transporting
          sensitive data.</p>
          </li>
          <li>
          <p>Store passwords using strong adaptive and salted hashing functions
          with a work factor (delay factor), such as Argon2, scrypt, bcrypt or
          PBKDF2.</p>
          </li>
          <li>
          <p>Initialization vectors must be chosen appropriate for the mode of
          operation. For many modes, this means using a CSPRNG (cryptographically
          secure pseudo random number generator). For modes that require a
          nonce, then the initialization vector (IV) does not need a CSPRNG. In all cases, the IV
          should never be used twice for a fixed key.</p>
          </li>
          <li>
          <p>Always use authenticated encryption instead of just encryption.</p>
          </li>
          <li>
          <p>Keys should be generated cryptographically randomly and stored in
          memory as byte arrays. If a password is used, then it must be converted
          to a key via an appropriate password base key derivation function.</p>
          </li>
          <li>
          <p>Ensure that cryptographic randomness is used where appropriate, and
          that it has not been seeded in a predictable way or with low entropy.
          Most modern APIs do not require the developer to seed the CSPRNG to
          get security.</p>
          </li>
          <li>
          <p>Avoid deprecated cryptographic functions and padding schemes, such as
          MD5, SHA1, PKCS number 1 v1.5 .</p>
          </li>
          <li>
          <p>Verify independently the effectiveness of configuration and
          settings.</p>
          </li>
          </ul>`,
    category: 'security'
  },
  {
    question: 'Що таке Sensitive data?',
    answer: `Sensitive data is confidential information that must be kept safe and out of reach from all outsiders unless they have permission to access it. (date of birth, password, credit cards etc)`,
    category: 'security'
  },
  {
    question: 'Insecure Design атака. Як превентати?',
    answer: `Insecure design is a broad category representing different weaknesses, expressed as “missing or ineffective control design.One of the factors that contribute to insecure design is the lack of business risk profiling inherent in the software or system being developed, and thus the failure to determine what level of security design is required.
    <br>
    How to prevent:<br>
    <ul>
      <li>
      <p>Establish and use a secure development lifecycle with AppSec
      professionals to help evaluate and design security and
      privacy-related controls</p>
      </li>
      <li>
      <p>Establish and use a library of secure design patterns or paved road
      ready to use components</p>
      </li>
      <li>
      <p>Use threat modeling for critical authentication, access control,
      business logic, and key flows</p>
      </li>
      <li>
      <p>Integrate security language and controls into user stories</p>
      </li>
      <li>
      <p>Integrate plausibility checks at each tier of your application
      (from frontend to backend)</p>
      </li>
      <li>
      <p>Write unit and integration tests to validate that all critical flows
      are resistant to the threat model. Compile use-cases <em>and</em> misuse-cases
      for each tier of your application.</p>
      </li>
      <li>
      <p>Segregate tier layers on the system and network layers depending on the
      exposure and protection needs</p>
      </li>
      <li>
      <p>Segregate tenants robustly by design throughout all tiers</p>
      </li>
      <li>
      <p>Limit resource consumption by user or service</p>
      </li>
      </ul> `,
    category: 'security'
  },
  {
    question: 'SSDLC',
    answer: `A Secure SDLC requires adding security testing at each software development stage, from design, to development, to deployment and beyond. Examples include designing applications to ensure that your architecture will be secure, as well as including security risk factors as part of the initial planning phase.
    <br>
    Software Development Lifecycle (SDLC) describes how software applications are built. It usually contains the following phases: <br>
    <ul><li><strong>Requirements</strong> gathering</li><li><strong>Design</strong> of new features based on the requirements</li><li><strong>Development</strong> of new capabilities (writing code to meet requirements)</li><li><strong>Verification</strong> of new capabilities—confirming that they do indeed meet the requirements</li><li><strong>Maintenance and evolution</strong> of these capabilities once the release goes out the door</li></ul>
    <br>
    <img width="550" height="280" loading="lazy" src="https://res.cloudinary.com/snyk/images/f_auto,q_auto/v1/wordpress-sync/ssdlc-2/ssdlc-2.png?_i=AA">
    <br>
    <strong>PHASE 1: REQUIREMENTS</strong>
    <ul><li><strong>Sample functional requirement:</strong> user needs the ability to verify their contact information before they are able to renew their membership.&nbsp;</li><li><strong>Sample security consideration</strong>: users should be able to see only their own contact information and no one else’s.</li></ul>
    <strong>PHASE 2: DESIGN</strong>
    <ul><li><strong>Sample functional design:</strong> page should retrieve the user’s name, email, phone, and address from CUSTOMER_INFO table in the database and display it on screen.</li><li><strong>Sample security concern:</strong> we must verify that the user has a valid session token before retrieving information from the database. If absent, the user should be redirected to the login page.</li></ul>
    <strong>PHASE 3: DEVELOPMENT</strong>
    <br>
    Secure coding guidelines, in this case, may include:
    <ul><li>Using parameterized, read-only SQL queries to read data from the database and minimize chances that anyone can ever commandeer these queries for nefarious purposes</li><li>Validating user inputs before processing data contained in them</li><li>Sanitizing any data that’s being sent back out to the user from the database</li><li>Checking open source libraries for vulnerabilities before using them</li></ul>
    <strong>PHASE 4: VERIFICATION</strong>
    <br>
    Verification at this phase may include:
    <ul><li>Automated tests that express the critical paths of your application</li><li>Automated execution of application unit tests that verify the correctness of the underlying application</li><li>Automated deployment tools that dynamically swap in application secrets to be used in a production environment</li></ul>
    <strong>PHASE 5: MAINTENANCE AND EVOLUTION</strong>
    <br><br>
    <strong>5 Secure SDLC Best Practices</strong>
    <br>
    1. EDUCATE YOUR DEVELOPERS<br>
    2. HAVE CLEAR REQUIREMENTS <br>
    3. MAINTAIN A GROWTH MINDSET <br>
    4. TIE IMPLEMENTATION TO OTHER INITIATIVES <br>
    5. TACKLE THE BIG PROBLEMS FIRST
`  ,
    category: 'security'},
  {
    question: 'Security Misconfiguration атака. Як превентати?',
    answer: `XML External Entities (XEE) Many older or poorly configured XML processors evaluate external entity references within XML documents. Protection golden rule - avoid XML =) If it's not the case keep XML processors up-to-date, disable evaluation of external entities, implement whitelisting server-side input validation, use special tools.
    <br>
    Security Misconfiguration This is commonly a result of insecure default configurations, incomplete or incorrect configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. To avoid simply don't do this shit, automate configuring environments, use different credentials, do not install any unnecessary features, keep all up-to-date, use automated control of configuration integrity.<br>
    The application might be volnurable if:
    <ul>
    <li>
    <p>Missing appropriate security hardening across any part of the
    application stack or improperly configured permissions on cloud
    services.</p>
    </li>
    <li>
    <p>Unnecessary features are enabled or installed (e.g., unnecessary
    ports, services, pages, accounts, or privileges).</p>
    </li>
    <li>
    <p>Default accounts and their passwords are still enabled and
    unchanged.</p>
    </li>
    <li>
    <p>Error handling reveals stack traces or other overly informative
    error messages to users.</p>
    </li>
    <li>
    <p>For upgraded systems, the latest security features are disabled or
    not configured securely.</p>
    </li>
    <li>
    <p>The security settings in the application servers, application
    frameworks (e.g., Struts, Spring, ASP.NET), libraries, databases,
    etc., are not set to secure values.</p>
    </li>
    <li>
    <p>The server does not send security headers or directives, or they are
    not set to secure values.</p>
    </li>
    <li>
    <p>The software is out of date or vulnerable (see <a href="../A06_2021-Vulnerable_and_Outdated_Components/">A06:2021-Vulnerable
    and Outdated Components</a>).</p>
    </li>
    </ul>
    How to prevent:
    <ul>
    <li>
    <p>A repeatable hardening process makes it fast and easy to deploy
    another environment that is appropriately locked down. Development,
    QA, and production environments should all be configured
    identically, with different credentials used in each environment.
    This process should be automated to minimize the effort required to
    set up a new secure environment.</p>
    </li>
    <li>
    <p>A minimal platform without any unnecessary features, components,
    documentation, and samples. Remove or do not install unused features
    and frameworks.</p>
    </li>
    <li>
    <p>A task to review and update the configurations appropriate to all
    security notes, updates, and patches as part of the patch management
    process (see <a href="../A06_2021-Vulnerable_and_Outdated_Components/">A06:2021-Vulnerable
    and Outdated Components</a>). Review
    cloud storage permissions (e.g., S3 bucket permissions).</p>
    </li>
    <li>
    <p>A segmented application architecture provides effective and secure
    separation between components or tenants, with segmentation,
    containerization, or cloud security groups (ACLs).</p>
    </li>
    <li>
    <p>Sending security directives to clients, e.g., Security Headers.</p>
    </li>
    <li>
    <p>An automated process to verify the effectiveness of the
    configurations and settings in all environments.</p>
    </li>
    </ul>`,
    category: 'security'
  },
  {
    question: 'Яка різниця між аутентифікація і авторизація.',
    answer: `Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.
    <br>
    <img width="600px" height="300px" src="https://www.ssl2buy.com/wiki/wp-content/uploads/2019/04/authentication-vs-authorization.jpg" alt="">`,
    category: 'security'
  },
  {
    question: 'Identification and Authentication Failures атака. Як привентати?',
    answer: `
    Broken authentication incorrect implementation of authentication or session management. To avoid, use multi-factor authentication, strong passwords, properly store and don't exposure credentials, limit, delay and log login attempts, limit session lifetime, use strong session IDs, rotate them on login.
    <br>
    There may be authentication weaknesses if the application:
    <ul>
      <li>
      <p>Permits automated attacks such as credential stuffing, where the
      attacker has a list of valid usernames and passwords.</p>
      </li>
      <li>
      <p>Permits brute force or other automated attacks.</p>
      </li>
      <li>
      <p>Permits default, weak, or well-known passwords, such as "Password1"
      or "admin/admin".</p>
      </li>
      <li>
      <p>Uses weak or ineffective credential recovery and forgot-password
      processes, such as "knowledge-based answers," which cannot be made
      safe.</p>
      </li>
      <li>
      <p>Uses plain text, encrypted, or weakly hashed passwords data stores </p>
      </li>
      <li>
      <p>Has missing or ineffective multi-factor authentication.</p>
      </li>
      <li>
      <p>Exposes session identifier in the URL.</p>
      </li>
      <li>
      <p>Reuse session identifier after successful login.</p>
      </li>
      <li>
      <p>Does not correctly invalidate Session IDs. User sessions or
      authentication tokens (mainly single sign-on (SSO) tokens) aren't
      properly invalidated during logout or a period of inactivity.</p>
      </li>
      </ul>
      <br>
      How to Prevent:
      <ul>
      <li>
      <p>Where possible, implement multi-factor authentication to prevent
      automated credential stuffing, brute force, and stolen credential
      reuse attacks.</p>
      </li>
      <li>
      <p>Do not ship or deploy with any default credentials, particularly for
      admin users.</p>
      </li>
      <li>
      <p>Implement weak password checks, such as testing new or changed
      passwords against the top 10,000 worst passwords list.</p>
      </li>
      <li>
      <p>Align password length, complexity, and rotation policies with
      National Institute of Standards and Technology (NIST)
      800-63b's guidelines in section 5.1.1 for Memorized Secrets or other
      modern, evidence-based password policies.</p>
      </li>
      <li>
      <p>Ensure registration, credential recovery, and API pathways are
      hardened against account enumeration attacks by using the same
      messages for all outcomes.</p>
      </li>
      <li>
      <p>Limit or increasingly delay failed login attempts, but be careful not to create a denial of service scenario. Log all failures
      and alert administrators when credential stuffing, brute force, or
      other attacks are detected.</p>
      </li>
      <li>
      <p>Use a server-side, secure, built-in session manager that generates a
      new random session ID with high entropy after login. Session identifier
      should not be in the URL, be securely stored, and invalidated after
      logout, idle, and absolute timeouts.</p>
      </li>
      </ul>
    `,
    category: 'security'
  },
  {
    question: 'Software and Data Integrity Failures (old name - Insecure Deserialization) атака. Як превентати?',
    answer: `
    Insecure Deserialization Insecure deserialization often leads to remote code execution or replay attacks, injection attacks, and privilege escalation attacks. The only safe architectural pattern is not to accept serialized objects from untrusted sources or to use serialization mediums that only permit primitive data types.
    <br>
    Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations. An example of this is where an application relies upon plugins, libraries, or modules from untrusted sources, repositories, and content delivery networks (CDNs). An insecure CI/CD pipeline can introduce the potential for unauthorized access, malicious code, or system compromise. Lastly, many applications now include auto-update functionality, where updates are downloaded without sufficient integrity verification and applied to the previously trusted application. Attackers could potentially upload their own updates to be distributed and run on all installations. Another example is where objects or data are encoded or serialized into a structure that an attacker can see and modify is vulnerable to insecure deserialization.
    <br>
    How to prevent:
    <ul>
    <li>
    <p>Use digital signatures or similar mechanisms to verify the software or data is from the expected source and has not been altered.</p>
    </li>
    <li>
    <p>Ensure libraries and dependencies, such as npm or Maven, are
    consuming trusted repositories. If you have a higher risk profile, consider hosting an internal known-good repository that's vetted.</p>
    </li>
    <li>
    <p>Ensure that a software supply chain security tool, such as OWASP
    Dependency Check or OWASP CycloneDX, is used to verify that
    components do not contain known vulnerabilities</p>
    </li>
    <li>
    <p>Ensure that there is a review process for code and configuration changes to minimize the chance that malicious code or configuration could be introduced into your software pipeline.</p>
    </li>
    <li>
    <p>Ensure that your CI/CD pipeline has proper segregation, configuration, and access
    control to ensure the integrity of the code flowing through the
    build and deploy processes.</p>
    </li>
    <li>
    <p>Ensure that unsigned or unencrypted serialized data is not sent to
    untrusted clients without some form of integrity check or digital
    signature to detect tampering or replay of the serialized data</p>
    </li>
    </ul>
`,
    category: 'security'
  },
  {
    question: 'Що таке сереалізація і десереалізація?',
    answer: ``,
    category: 'security'
  },
  {
    question: 'Security Logging and Monitoring Failures (old name - Insufficient Logging & Monitoring) атака. Як привентати?',
    answer: `
    Insufficient Logging & Monitoring lack of logging and monitoring allows attackers to do their job. All red flags should be logged in a manageable manner, the monitoring system should be able to react in real-time. It's good to use protection frameworks for such purposes.
    <br>
     Insufficient logging, detection, monitoring, and active response occurs any time:
    <ul>
      <li>
      <p>Auditable events, such as logins, failed logins, and high-value
      transactions, are not logged.</p>
      </li>
      <li>
      <p>Warnings and errors generate no, inadequate, or unclear log
      messages.</p>
      </li>
      <li>
      <p>Logs of applications and APIs are not monitored for suspicious
      activity.</p>
      </li>
      <li>
      <p>Logs are only stored locally.</p>
      </li>
      <li>
      <p>Appropriate alerting thresholds and response escalation processes
      are not in place or effective.</p>
      </li>
      <li>
      <p>Penetration testing and scans by dynamic application security testing (DAST) tools (such as OWASP ZAP) do
      not trigger alerts.</p>
      </li>
      <li>
      <p>The application cannot detect, escalate, or alert for active attacks
      in real-time or near real-time.</p>
      </li>
      </ul>
      <br>
      How to prevent:
      <ul>
      <li>
      <p>Ensure all login, access control, and server-side input validation
      failures can be logged with sufficient user context to identify
      suspicious or malicious accounts and held for enough time to allow
      delayed forensic analysis.</p>
      </li>
      <li>
      <p>Ensure that logs are generated in a format that log management
      solutions can easily consume.</p>
      </li>
      <li>
      <p>Ensure log data is encoded correctly to prevent injections or
      attacks on the logging or monitoring systems.</p>
      </li>
      <li>
      <p>Ensure high-value transactions have an audit trail with integrity
      controls to prevent tampering or deletion, such as append-only
      database tables or similar.</p>
      </li>
      <li>
      <p>DevSecOps teams should establish effective monitoring and alerting
      such that suspicious activities are detected and responded to
      quickly.</p>
      </li>
      <li>
      <p>Establish or adopt an incident response and recovery plan, such as
      National Institute of Standards and Technology (NIST) 800-61r2 or later.</p>
      </li>
      </ul>`,
    category: 'security'
  },
  {
    question: 'Server-Side Request Forgery атака. Як привентати?',
    answer: `SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).
    <br>
    <article class="md-content__inner md-typeset">
    <h2 id="how-to-prevent">How to Prevent</h2>
    <p>Developers can prevent SSRF by implementing some or all the following
    defense in depth controls:</p>
    <h3 id="from-network-layer"><strong>From Network layer</strong></h3>
    <ul>
    <li>
    <p>Segment remote resource access functionality in separate networks to
    reduce the impact of SSRF</p>
    </li>
    <li>
    <p>Enforce “deny by default” firewall policies or network access
    control rules to block all but essential intranet traffic.<br>
    <em>Hints:</em><br>
    ~ Establish an ownership and a lifecycle for firewall rules based on applications.<br>
    ~ Log all accepted <em>and</em> blocked network flows on firewalls
    (see <a href="../A09_2021-Security_Logging_and_Monitoring_Failures/">A09:2021-Security Logging and Monitoring Failures</a>).</p>
    </li>
    </ul>
    <h3 id="from-application-layer"><strong>From Application layer:</strong></h3>
    <ul>
    <li>
    <p>Sanitize and validate all client-supplied input data</p>
    </li>
    <li>
    <p>Enforce the URL schema, port, and destination with a positive allow
    list</p>
    </li>
    <li>
    <p>Do not send raw responses to clients</p>
    </li>
    <li>
    <p>Disable HTTP redirections</p>
    </li>
    <li>
    <p>Be aware of the URL consistency to avoid attacks such as DNS
    rebinding and “time of check, time of use” (TOCTOU) race conditions</p>
    </li>
    </ul>
    </article>`,
    category: 'security'
  },
  {
    question: 'AUTH types.',
    answer: `
      <div class="markdown-body">
      <h1><a id="user-content-authentications-types" class="anchor" aria-hidden="true" href="#authentications-types"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Authentications types</h1>
      <h2><a id="user-content-jwt" class="anchor" aria-hidden="true" href="#jwt"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>JWT</h2>
      <p>JSON Web Token is an open standard for secure transmitting information as a JSON object. JWT can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
      <h3><a id="user-content-key-use-cases" class="anchor" aria-hidden="true" href="#key-use-cases"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Key use cases</h3>
      <ul>
      <li>
      <strong>Authorization</strong>. Once the user is logged in, each subsequent request will include the JWT.</li>
      <li>
      <strong>Information Exchange</strong>. Because JWTs can be signed you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.</li>
      </ul>
      <h3><a id="user-content-how-json-web-tokens-work" class="anchor" aria-hidden="true" href="#how-json-web-tokens-work"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>How JSON Web Tokens work</h3>
      <img src="security-basics/images/client-credentials-grant.png" width="600px">
      <ol>
      <li>The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.</li>
      <li>When the authorization is granted, the authorization server returns an access token to the application.</li>
      <li>The application uses the access token to access a protected resource (like an API).</li>
      </ol>
      <h2><a id="user-content-cookies-httponly-cookies" class="anchor" aria-hidden="true" href="#cookies-httponly-cookies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Cookies, HttpOnly Cookies</h2>
      <p>An HTTP cookie is a piece of data a server sends with specific headers to a browser. The browser then uses it when communicating back to the server.</p>
      <h3><a id="user-content-cookies-are-mainly-used-for-three-purposes" class="anchor" aria-hidden="true" href="#cookies-are-mainly-used-for-three-purposes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Cookies are mainly used for three purposes</h3>
      <ul>
      <li>
      <strong>Session management</strong>. Logins, shopping carts, game scores, or anything else the server should remember</li>
      <li>
      <strong>Personalization</strong>. User preferences, themes, and other settings</li>
      <li>
      <strong>Tracking</strong>. Recording and analyzing user behavior</li>
      </ul>
      <p>Cookies today aren't indeed to be used as storage. For this purpose, there are Web Storage API (localStorage and sessionStorage) and IndexedDB.</p>
      <h3><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Usage</h3>
      <p>Cookies are pretty simple in usage.</p>
      <ol>
      <li>
      <strong>Server</strong> sets cookie with one or more <code>Set-Cookie</code> headers.</li>
      <li>
      <strong>Browser</strong> stores cookie and provide future requests to the same server with <code>Cookie</code> header containing this cookie, until it expires.</li>
      </ol>
      <h3><a id="user-content-set-cookie-attributes" class="anchor" aria-hidden="true" href="#set-cookie-attributes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Set-cookie attributes</h3>
      <ul>
      <li>
      <strong>Expires</strong>=&lt;date&gt;</li>
      <li>
      <strong>Max-Age</strong>=&lt;number-of-seconds&gt; (has precedence over <code>Expires</code>)</li>
      <li>
      <strong>Domain</strong>=&lt;domain-value&gt;</li>
      <li>
      <strong>Path</strong>=&lt;path-value&gt;</li>
      <li>
      <strong>Secure</strong> - only for <code>https:</code> requests (except on localhost)</li>
      <li>
      <strong>HttpOnly</strong> - with no access for the client's JavaScript to this cookie</li>
      <li>
      <strong>SameSite</strong> - controls whether a cookie is sent with cross-origin requests
      <ul>
      <li>
      <em>Strict</em> - a cookie is sent only for the same-site requests</li>
      <li>
      <em>Lax</em> - default, is sent when a user is navigating to the origin site from an external site and isn't sent for other cross-origin requests</li>
      <li>
      <em>None</em> - a cookie is sent for both same-site and cross-origin requests, only works with the <code>Secure</code> attribute</li>
      </ul>
      </li>
      </ul>
      <h3><a id="user-content-attributes-protection-against-attacks" class="anchor" aria-hidden="true" href="#attributes-protection-against-attacks"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Attributes protection against attacks</h3>
      <ul>
      <li>Secure - <a href="Man-in-the-Middle.md">Man-in-the-Middle</a>
      </li>
      <li>HttpOnly - <a href="OWASP.md">XSS</a>
      </li>
      <li>SameSite - <a href="CSRF.md">CSRF</a>
      </li>
      </ul>
      <h2><a id="user-content-http-basic-authentication" class="anchor" aria-hidden="true" href="#http-basic-authentication"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>HTTP Basic Authentication</h2>
      <p>In the context of an HTTP transaction, basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of Authorization: Basic , where credentials is the Base64 encoding of ID and password joined by a single colon :.</p>
      <h3><a id="user-content-security" class="anchor" aria-hidden="true" href="#security"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Security</h3>
      <p>As the user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. HTTPS/TLS should be used with basic authentication. Without these additional security enhancements, basic authentication should not be used to protect sensitive or valuable information.</p>
      <p>Because the BA field has to be sent in the header of each HTTP request, the web browser needs to cache credentials for a reasonable period of time to avoid constantly prompting the user for their username and password. Caching policy differs between browsers.</p>
      <p>HTTP does not provide a method for a web server to instruct the client to "log out" the user.</p>
      </div>
    `,
    category: 'security'
  },
  {
    question: 'Яка у мене на проекті ауторизація. Який auth type.',
    answer: `JWT Token`,
    category: 'security'
  },
  {
    question: 'Що таке OAUTH? 1.0 / 2.0',
    answer: `
      <div class="markdown-body">
      <h2><a id="user-content-oauth" class="anchor" aria-hidden="true" href="#oauth"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>OAuth</h2>
      <p>While browsing the web, you've almost certainly come across sites that let you log in using your social media account. The chances are that this feature is built using the popular OAuth 2.0 framework.</p>
      <p>The basic OAuth process is widely used to integrate third-party functionality that requires access to certain data from a user's account. For example, an application might use OAuth to request access to your email contacts list so that it can suggest people to connect with. However, the same mechanism is also used to provide third-party authentication services, allowing users to log in with an account that they have with a different website.</p>
      <p>OAuth 2.0 was originally developed as a way of sharing access to specific data between applications. It works by defining a series of interactions between three distinct parties, namely a client application, a resource owner, and the OAuth service provider.</p>
      <ul>
      <li>
      <strong>Client application</strong> - The website or web application that wants to access the user's data.</li>
      <li>
      <strong>Resource owner</strong> - The user whose data the client application wants to access.</li>
      <li>
      <strong>OAuth service provider</strong> - The website or application that controls the user's data and access to it. They support OAuth by providing an API for interacting with both an authorization server and a resource server.</li>
      </ul>
      <h3><a id="user-content-oauth-authentication" class="anchor" aria-hidden="true" href="#oauth-authentication"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>OAuth authentication</h3>
      <p>Although not originally intended for this purpose, OAuth has evolved into a means of authenticating users as well.</p>
      <ol>
      <li>The user chooses the option to log in with their social media account. The client application then uses the social media site's OAuth service to request access to some data that it can use to identify the user. This could be the email address that is registered with their account, for example.</li>
      <li>After receiving an access token, the client application requests this data from the resource server, typically from a dedicated /userinfo endpoint.</li>
      <li>Once it has received the data, the client application uses it in place of a username to log the user in. The access token that it received from the authorization server is often used instead of a traditional password.</li>
      </ol>
      <h3><a id="user-content-vulnerabilities" class="anchor" aria-hidden="true" href="#vulnerabilities"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Vulnerabilities</h3>
      <p>OAuth authentication vulnerabilities arise partly because the OAuth specification is relatively vague and flexible by design. It includes many configuration settings that are necessary for keeping users' data secure.</p>
      <h4><a id="user-content-vulnerabilities-in-the-client-application" class="anchor" aria-hidden="true" href="#vulnerabilities-in-the-client-application"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Vulnerabilities in the client application</h4>
      <ul>
      <li>Improper implementation of the implicit grant type LABS</li>
      <li>Flawed CSRF protection LABS</li>
      </ul>
      <h4><a id="user-content-vulnerabilities-in-the-oauth-service" class="anchor" aria-hidden="true" href="#vulnerabilities-in-the-oauth-service"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Vulnerabilities in the OAuth service</h4>
      <ul>
      <li>Leaking authorization codes and access tokens LABS</li>
      <li>Flawed scope validation</li>
      <li>Unverified user registration</li>
      </ul>
      <h3><a id="user-content-preventing-vulnerabilities-for-oauth-service-providers" class="anchor" aria-hidden="true" href="#preventing-vulnerabilities-for-oauth-service-providers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Preventing vulnerabilities for OAuth service providers</h3>
      <ul>
      <li>Require client applications to register a whitelist of valid redirect_uris. Wherever possible, use strict byte-for-byte comparison to validate the URI in any incoming requests. Only allow complete and exact matches rather than using pattern matching. This prevents attackers from accessing other pages on the whitelisted domains.</li>
      <li>Enforce the use of the state parameter. Its value should also be bound to the user's session by including some unguessable, session-specific data, such as a hash containing the session cookie. This helps protect users against CSRF-like attacks. It also makes it much more difficult for an attacker to use any stolen authorization codes.</li>
      <li>On the resource server, make sure you verify that the access token was issued to the same client_id that is making the request. You should also check the scope being requested to make sure that this matches the scope for which the token was originally granted.</li>
      </ul>
      <h3><a id="user-content-preventing-vulnerabilities-for-oauth-client-applications" class="anchor" aria-hidden="true" href="#preventing-vulnerabilities-for-oauth-client-applications"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Preventing vulnerabilities for OAuth client applications</h3>
      <ul>
      <li>Make sure you fully understand the details of how OAuth works before implementing it. Many vulnerabilities are caused by a simple lack of understanding of what exactly is happening at each stage and how this can potentially be exploited.</li>
      <li>Use the state parameter even though it is not mandatory.</li>
      <li>Send a redirect_uri parameter not only to the /authorization endpoint but also to the /token endpoint.</li>
      <li>When developing mobile or native desktop OAuth client applications, it is often not possible to keep the client_secret private. In these situations, the PKCE (RFC7638) mechanism may be used to provide additional protection against access code interception or leakage.</li>
      <li>If you use the OpenID Connect id_token, make sure it is properly validated according to the JSON Web Signature, JSON Web Encryption, and OpenID specifications.</li>
      <li>Be careful with authorization codes - they may be leaked via Referer headers when external images, scripts, or CSS content is loaded. It is also important to not include them in the dynamically generated JavaScript files as they may be executed from external domains via &lt;script&gt; tags.</li>
      </ul>
      </div>
    `,
    category: 'security'
  },
  {
    question: 'OAUTH переваги',
    answer: `
    Features of OAUTH:
    <ol>
    <li>It allows you to read data of a user from another application.</li>
    <li>It supplies the authorization workflow for web, desktop applications, and mobile devices.</li>
    <li>Is a server side web app that uses authorization code and does not interact with user credentials.</li>
    <li>It gives users more control over their data; they can selectively grant access to various functionalities for applications they want to use.</li>
    </ol>
    <br>
    Advantages of OAUTH:<br>
    <ul>
    <li>This flexible protocol relies on SSL (Secure Sockets Layer) to ensure data between the web server and browsers remain private.</li>
    <li>SSL uses cryptography industry protocols to keep data safe.</li>
    <li>It uses tokenization to give limited access to the user's data. For example, instead of storing credit card information on Amazon’s web site, the credit card number, security code and consumer name are each given “token” IDs. The tokens are given to the merchant, not the actual data.</li>
    <li>It is easy to implement and provides strong authentication. In addition to the two-factor authentication, tokens can be revoked if necessary (ie, suspicious activity).</li>
    <li>Uses single sign on</li>
    </ul>`,
    category: 'security'
  },
  {
    question: 'Що таке Single sign-on (SSO)?',
    answer: `
    Single sign-on (SSO) is a session and user authentication service that permits a user to use one set of login credentials -- for example, a name and password -- to access multiple applications. SSO can be used by enterprises, smaller organizations and individuals to ease the management of various usernames and passwords.
    `,
    category: 'security'
  },
  {
    question: 'Що таке PKCE?',
    answer: `PKCE (Proof Key for Code Exchange) is an extension to the Authorization Code flow to prevent CSRF and authorization code injection attacks. `,
    category: 'security'
  },
  {
    question: 'Bearer VS JWT token',
    answer: `
    JWT is an encoding standard for tokens that contains a JSON data payload that can be signed and encrypted.
<br>
JWT can be used for many things, among those are bearer tokens, i.e. a piece of information that you can present to some service that by virtue of you having it (you being the "bearer") grants you access to something.
<br>
Bearer tokens can be included in an HTTP request in different ways, one of them (probably the preferred one) being the Authorization header. But you could also put it into a request parameter, a cookie or the request body. That is mostly between you and the server you are trying to access.`
    ,
    category: 'security'},
  {
    question: 'Angular & Security',
    answer: `
    <div class="callout is-helpful">
      <header>Best practices</header>
      <table border="1" cellpadding="1" cellspacing="1" role="table">
      <thead>
      <tr>
      <th align="left" scope="col">Practices</th>
      <th align="left" scope="col">Details</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td align="left">Keep current with the latest Angular library releases</td>
      <td align="left">The Angular libraries get regular updates, and these updates might fix security defects discovered in previous versions. Check the Angular <a href="https://github.com/angular/angular/blob/main/CHANGELOG.md">change log</a> for security-related updates.</td>
      </tr>
      <tr>
      <td align="left">Don't alter your copy of Angular</td>
      <td align="left">Private, customized versions of Angular tend to fall behind the current version and might not include important security fixes and enhancements. Instead, share your Angular improvements with the community and make a pull request.</td>
      </tr>
      <tr>
      <td align="left">Avoid Angular APIs marked in the documentation as "<em>Security Risk</em>"</td>
      <td align="left">For more information, see the <a href="guide/security#bypass-security-apis">Trusting safe values</a> section of this page.</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br>
      <img height="480px" width="600px"
      src="https://snyk.io/wp-content/uploads/Screen-Shot-2020-08-10-at-9.21.58-1536x1092.png" alt="">
    `,
    category: 'security'
  },
];
