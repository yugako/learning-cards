export const CARDS = [
  {
    question: 'Для чого нам парадигми програмування?',
    answer: `Paradigms are important because they define a programming language and how it works.
    A great way to think about a paradigm is as a set of ideas that a programming language can use to perform tasks
    in terms of machine-code at a much higher level.Certain paradigms are better suited for certain types of problems,
    so it makes sense to use different paradigms for different kinds of projects.`
  },
  {
    question: 'Imperative vs Declarative. Що вони значать, для чого вони?',
    answer: 'Imperative code (HOW) is where you spell out each step of how you want something done, whereas with declarative code you merely say what it is that you want done'
  },
  {
    question: 'Що таке ООП? Розповісти про їх стовпи. + Приклади з життя',
    answer: 'OOP is programming paradigm that represents program entities throughout the object and defines how we can interact with this objects.'
  },
  {
    question: 'Що таке Abstraction?',
    answer: `The process of generalization (also modeling). We replace a particular thing by its more general model. Allow us not to be coupled with implementation details, to use any implementation, satisfying specific interface.

An abstract class is a class with at least one abstract method. Abstract class's non-abstract methods can have implementations, but a class itself can't.

An interface is an abstract class, which methods are only abstract.`
  },
  {
    question: 'Що таке Polymorphism?',
    answer: `Is an ability to have different forms for the same object's property. Applicable to the OOP, it's a possibility to call a method with a specific name and get different results depending on the call's details.

We can determine:

static (compile-time) polymorphism / overloading:
one method of one class has several implementations depending on its params;
dynamic (run time) polymorphism / overriding
several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass's method overrides superclass's method.
In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`
  },
  {
    question: 'Що таке Inheritance?',
    answer: `Is an ability of a class/object to take some properties from another class/object. In both classical OOP, and JS we can inherit a whole method. As for fields: in classical OOP, we can only inherit its name and type - in JS, we can inherit a field value in addition.

Types:

single (superclass -> subclass)
multilevel (superclass -> subclass -> subsubclass)
hierarchical (superclass -> (subclass1 subclass2))
multiple ((superclass1 superclass2) -> subclass)
hybrid (mix of above)`
  },
  {
    question: 'Що таке Encapsulation?',
    answer: 'Is hiding information inside a particular namespace (container) to limit direct communication with it. We can have one object/class consisting of different variables and functions. Encapsulation prevents or restricts (e.g., read but not write) interaction with some of them.'
  },
  {
    question: 'Типи Поліморфізму.',
    answer: 'We can determine:<br>' +
      '<br>' +
      'static (compile-time) polymorphism / overloading:<br>' +
      'one method of one class has several implementations depending on its params;<br>' +
      'dynamic (run time) polymorphism / overriding<br>' +
      'several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass\'s method overrides superclass\'s method.<br>' +
      'In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`<br>'
  },
  {
    question: 'Що таке композиція? В контексті програмування',
    answer: 'Function composition is the process of combining two or more functions in order to produce a new function or perform some computation. For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript. Understanding function composition is an important step towards understanding how software is constructed using the functional programming. ' +
      '' +
      'OR'+
      `is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result.

        Sometimes it's hard to read multiply nested functions in a composition, so it's a bit more clear with the helpers like compose.

        A useful method for function composition in JavaScript is reduceRight.`
  },
  {
    question: 'Обєктна композиція що це таке?',
    answer: ''
  },
  {
    question: 'Composition over inheritance',
    answer: `Software development is mostly about a function composition or an object composition. Hence we compare it with inheritance let's talk about object composition here. It refers to combining objects into more complex ones.
      <br>
      Cons of inheritance:

      The tight coupling problem: Because child classes are dependent on the implementation of the parent class, class inheritance is the tightest coupling available in object-oriented design.<br>
      The fragile base class problem: Due to tight coupling, changes to the base class can potentially break a large number of descendant classes — potentially in code managed by third parties. The author could break code they’re not aware of.<br>
      The inflexible hierarchy problem: With single ancestor taxonomies, given enough time and evolution, all class taxonomies are eventually wrong for new use-cases.<br>
      The duplication by necessity problem: Due to inflexible hierarchies, new use cases are often implemented by duplication, rather than extension, leading to similar classes which are unexpectedly divergent. Once duplication sets in, it’s not obvious which class new classes should descend from or why.<br>
      The gorilla/banana problem: “…the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong, “Coders at Work”
      Function composition is very similar to object composition and has its pros over an inheritance.`
  },
  {
    question: 'Як можна атоматизувати функціональну композицію?',
    answer: ''
  },
  {
    question: 'Що таке Pure function?',
    answer: `Pure function is a function which returns the same result for the same arguments and dont have
     any side effects. We can decide as side effects such things console.log or reassigning some variable in another scope.
     So, should not write any data in console, alerts etc and it should not interact with other scopes.
     `
  },
  {
    question: 'Що таке ідемпотична функція?',
    answer: 'A function is said to be idempotent if it returns the same output for the same input or does what we expect it to do. Idempotence is different from pure function as it allows side effects. An example could be calling an API with an input and returning the same output no matter how many times it has been called.'
  },
  {
    question: 'Whats referential transparency?',
    answer: `Referential transparency
      is a property of an expression to stay the same after replacing it with its corresponding value (and vice-versa). Pure functions are always referentially transparent, and we can easily replace them with their output.`
  },
  {
    question: 'Що таке first class functions/ citizens?',
    answer: 'In case of first class functions we decide function like an variable and can operate it'
  },
  {
    question: 'Як зрозуміти що мова володіє фірс-класс фанкшинами?',
    answer: 'To check whether programming language supports first-class functions we can create variable and assign some function to it. If it works OK, this means that language supports first class functions'
  },
  {
    question: 'Що таке high order functions (HOF)?',
    answer: 'HOF is a function which accepts function and/or return another function. Examples: array methods (map, filter), bind, pipe'
  },
  {
    question: 'Що таке immutability? ',
    answer: `Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values
      Immutables are the objects whose state cannot be changed once the object is created.
      One of great examples is NgRx store which returns the new instance of store state.
      We can use Object.freeze to make object immutable. Also we can use defineProperty object function to set such properties as writeable and configurable to config some elements in object or array`
      + '<br><br> Another explanation: <br>'  +`Immutability in OOP and FP is a property of an object state being unable to change.
      <br><br>
      Weak immutability
      The state of an object consists of two parts: its fields (shape/type) and its values (appearance/instance). If an object's shape cannot be changed but its appearance can - we call this weak immutability. In JavaScript, objects are high mutable by design. We can alter their shape as well as their appearance.
      <br><br>
      Strong immutability
      In contrast, strong immutability means the impossibility of changing anything about an object's state, neither fields nor values. In JavaScript, under the hood, e.g., strings are strongly immutable (but in the language user's point of view, all the primitives in JS are weakly immutable till you do not force them to strong immutability with the const keyword).`
  },
  {
    question: 'Що таке Шеред стейт?',
    answer: 'A shared state is any variable, object, or memory space that exists in a shared scope. Any non-constant variable used by multiple separate scopes, including the global scope and closure scopes, is considered to be in a shared state. In functional programming, shared states should be avoided. A shared state prevents a function from being pure. When the shared state rule is violated and the program modifies a variable, a side effect is created. In OOP, shared states are often passed around as objects. OOP functions may modify the shared state. This is very much against functional programming rules.'
  },
  {
    question: 'Що таке Raise condition?',
    answer: 'A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly.<br>' +
      '<br>' +
      'A simple example of race condition would be one light source that is attached to two different light controllers. When we target the light source with two simultaneous actions - one switches on, and the other switches off. The uncertain end result whether the light source is on or off.<br>' +
      '<br>' +
      'JavaScript asynchronization can\'t be in parallel as JavaScript executes on a single thread, but it works with concurrency.'+
      `This is why usually it is better to combine both solutions.

      Cancel the previous unneeded request: it will free up the server of handling the unneeded request
      In a case that only the last request is needed, save a session object and handle only the request with the correct session.`
  },
  {
    question: 'Що таке рекурсія?',
    answer: `Recursion is a process of calling itself. A function that calls itself is called a recursive function.
      A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.<br>
      Tailed recursion<br>
      is about a recursive function which calls itself in exactly the last step of executing.
      <br>
      Pros and Cons
      + If it's pure, intermediate results can be cached.<br>
      + Tailed recursive function can be transformed to cycle by compiler (in some languages, including JavaScript).<br>
      + Easier to read solution of problem.<br>
      - Possible performance issues (each step allocates the whole function environment in memory again).
      - Limited in calls number.`
  },
  {
    question: 'Що вигідніше рекурсія чи ітерація?',
    answer: 'Iteration. If we are not running through some tree'
  },
  {
    question: 'Execution context stack',
    answer: 'The Execution Stack, also known as the Call Stack, keeps track of all the Execution Contexts created during the life cycle of a script. JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time.'
  },
  {
    question: 'Чого бракує в джс для рекурсії на відміну від інших функціональних мов?',
    answer: ''
  },
  {
    question: 'What is tail call optimization?',
    answer: `Tail Call Optimization is related to a specific type of optimization that can occur with function calls. According to Kyle Simpson, a tail call is a function call that appears at the tail of another function, such that after the call finishes, there’s nothing left to do.

      Tail code optimization takes a recursive function and generate an iterative function using “goto” internally, and then execute it. It does not limit the stack calls because there are none and the function is not a recursive function more. The performance of this iterative function is equivalent to its recursive function.

      In other words, tail call optimization means that it is possible to call a function from another function without growing the call stack.`
  },
  {
    question: 'Що таке Currying and Partially Application?',
    answer: 'Currying: A function returning another function that might return another function, but every returned function must take only one parameter at a time. Partial application: A function returning another function that might return another function, but each returned function can take several parameters.'
  },
  {
    question: 'Що таке фанктор?',
    answer: ''
  },
  {
    question: 'Що таке Монада?',
    answer: ''
  },
  {
    question: 'Плюси і мінуси ООП',
    answer: `
    Advantages:<br>
    We can reuse the code multiple times using class<br>
    Inherit the class to subclass for data redundancy<br>
    It is easy to maintain and modify<br>
    It maintains the security of data<br>
    Low-cost development<br><br>

    Disadvantages<br>
    Size is larger than other programs<br>
    It required a lot of effort to create<br>
    It is slower than other programs<br>
    It is not suitable for some sorts of problems<br>
    It takes time to get used to it.`
  },
  {
    question: 'Плюси і мінуси функціонального програмування',
    answer: `
      Disadvantages<br>

      There is no efficient vocabulary for functional languages. Purely functional vocabularies work slower than the hash tables, and for some applications, this can be critical. Secondly, there is no purely functional weak hash map. Nevertheless, for most developers, this defect may remain unnoticed.
      Functional programming is not suitable for algorithms in graphs (due to slow work) and in general for those solutions that for decades were based on imperative programming.
      Check the lists of FP disadvantages on Quora and in the article by Alexander Alvin too.

      Okay, the last point we mentioned is not very related to cons because we cannot blame functional programming for what it was not meant to be.
      <br><br>
      Advantages<br>

      Functional programming is famous for its high-level abstractions that hide a large number of details of such routine operations like iterating. This makes the code shorter and, as a consequence, guarantees a smaller number of errors that can be tolerated.
      In the functional programming, there is a smaller number of language primitives. Well-known classes are not used in FP. Instead of creating a unique description of an object with operations in the form of methods, in functional programming, there are several basic language primitives that are well optimized inside.
      Due to the language and structures flexibility, as a functional programming developer, you can bring the language closer to the problem. And not vice versa. In addition, FP offers some new and interesting tools for solving complex tasks that OOP developers often neglect.
      Working with functional languages provides accurate and fast code writing, facilitates testing and debugging. You’re working with high-level programs, and the functions signatures are more informative.`
  },
  {
    question: 'Реактивне програмування. Що це таке? в чому його суть?',
    answer: 'Reactive programming is a programming paradigm for writing code, mainly concerned with asynchronous data streams. It is a programming of event streams that happens in time.'
  },
  {
    question: 'Що таке реактивне функціональне програмування?',
    answer: 'The main idea of (functional) reactive programming is to build programs in a declarative way, by defining the streams, how they are linked together, and what happens if a new stream value arrives over time.' +
      `<br>ORRRR<br><br>
        Reactive programming is mostly like Functional programming where functions and data are combined with time and called streams. We can create a stream from anything: array, primitive value, etc. We can merge streams, composite them, have HoS (high order stream) which takes another stream as an input or gives as a result.
        A stream is a sequence of ongoing events ordered in time. Streams can emit three things: a value (of some type), an error, or a "completed" signal. To capture these emits you subscribe to a stream passing a function called observers (Observer design pattern).
        On top of that ideas, we have a bunch of functions to help us handle streams with all the power of functionality.`
  },
  {
    question: 'Які можуть бути стріми в реактивному програмуванні?',
    answer: `Хот і колд і теплі (мікс хот і колд)
    Приклад темплого обсервебла - якщо 2-3 рази підпишешсся. то він піде 3 рази. а так через мультикастинг , навітьякщо підпишемся 3 рази, то тіки запит піде 1 раз, а інши його будуть переюзувати`
  },
  {
    question: 'Порівняння обсервеблів з промісом. Відмінності',
    answer: `
      Observables - Promises  -| <br>
      Emit multiple values over a period of time. - Emit a single value at a time.<br>
      Are lazy: they’re not executed until we subscribe to them using the subscribe() method. - Are not lazy: execute immediately after creation. <br>
      Have subscriptions that are cancellable using the unsubscribe() method, which stops the listener from receiving further values. - Are not cancellable. <br>
      Provide the map for forEach, filter, reduce, retry, and retryWhen operators. - Don’t provide any operations. <br>
      Deliver errors to the subscribers. - Push errors to the child promises.`
  },
  {
    question: 'що таке депенденсі інджекшин патерн?',
    answer: 'A direct instantiating object inside a class (e.g., in a constructor) leads to tight coupling and hard maintenance and is better to be avoided. Instead, we pass an object as an argument to a class method. At the same time, we lower coupling using an interface as a parameter type of this method.'
  },
  {
    question: 'Які проблеми вирішує депенденсі інджекшин? які створює?',
    answer: ''
  },
  {
    question: 'Інверсія контролю. +  Приклади',
    answer: 'Abbr IoC stands for inversion of control. This pattern includes dependency injection. The main idea is: code shouldn\'t decide when and where to instantiate objects. It\'s better to trust it to a controlling framework, a library, or your dedicated module. Either of them is generally called a container. So container plays a controlling role: knows and care about objects lifetime, allocates and eliminates them.'
  },
  {
    question: `Pros and cons of reactive programming`,
    answer: `The most common example of RP in the JavaScript world is RxJS.
      <br><br>
      Pros:
      <br><br>
      writing declarative code<br>
      avoiding callback hell<br>
      purity<br>
      avoiding implementation details with a focus on business goals<br><br>
      Cons:<br>

      only hard debugging<br>
      making documentation<br>
      memory consumption,<br>
      time to start<br>
      managing concurrency<br>
      complexity of testing<br>
      a learning curve`
  },
  {
    question: 'Як відбувається комунікація в компютері?',
    answer: ''
  },
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
      `We have cool abrr to rememmer all layers - Please Do Not Tell Secret Password Anyone`
  },
  {
    question: 'TCP/IP модель',
    answer: 'Its abbreviation for Transfer Control Protocol/Internet Protocol. CP Model is developed by ARPANET (Advanced Research Project Agency Network).<br>' +
      'TCP/IP helps you to determine how a specific computer should be connected to the internet and how you can transmit data between them. It helps you to create a virtual network when multiple computer networks are connected togethe <br>На відміну від (whereless?) OSI It has only 4 Layers: <br>' +
      'Application (Application, Presentation, Session) <br>'+
      `Transport (transport) <br>
       Internet (Network) <br>
       Network access layer (Data link, Physycal)`
  },
  {
    question: 'Різниця між OSI та TCP/IP',
    answer: '- TCP/IP is designed to solved specific communication problems on specific protocols when OSI is generic protocol independent model' +
      '<br>- In TCP/IP most applications use all of layers when in OSI single apps do not use all. Only 1,2, 3 are mandatory' +
      '<br>-OSI header is 5 bytes, whereas TCP/IP header size is 20 bytes.'
  },
  {
    question: 'Whats Internet Protocol',
    answer: `<div class="markdown-body">
                <h1>
                Internet Protocol</h1>
          <p>IP implements packet-switched networking. It has a concept of hosts, which are machines. The IP protocol specifies how datagrams (packets) are sent between these hosts.</p>
          <p>A packet is a chunk of binary data that has a source host and a destination host. An IP network will then simply transmit the packet from the source to the destination. One important aspect of IP is that packets are delivered using the best effort. A packet may be lost along the way and never reach the destination. Or it may get duplicated and arrive multiple times at the destination.</p>
          <p>Each host in an IP network has an address -- the so-called IP address. Each packet contains the source and destination hosts' addresses. The IP is responsible for routing datagrams -- as the IP packet travels through the network, each node (host) that it travels through looks at the destination address in the packet to figure out in which direction the packet should be forwarded.</p>
          <p>Today, most packages are still IPv4 (Internet Protocol version 4), where each IPv4 address is 32 bits long. They're most often written in dotted-decimal notation, like so: 198.51.100.42</p>
          <p>The newer IPv6 standard is slowly gaining traction. It has a larger address space: its addresses are 128 bits long. This allows for easier routing as the packets travel through the network. And since there are more available addresses, tricks such as network address translation are no longer necessary. IPv6 addresses are represented in the hexadecimal system and divided into eight groups separated by colons, e.g., 2001:0db8:85a3:0042:1000:8a2e:0370:7334</p>
          <h2>
          Structure</h2>
          <p>An IP packet consists of a header and a payload.</p>
          <p>The header is 20 bytes long (without options, which are rarely used).</p>
          <p>The IPv6 header has a fixed length of 40 bytes. It's a lot simpler than IPv4 - a few lessons were learned in the years that have passed since IPv4.</p>
          <h2>
          Fragmentation</h2>
          <p>In IPv4, packets (datagrams) can get fragmented. The underlying transport layer will have an upper limit to the length of a packet it can support. In IPv4, a router may fragment a packet if it gets routed onto an underlying data link for which the packet would otherwise be too big. These packets will then get reassembled at the destination host. The sender can decide to disallow routers to fragment packets, in which case they'll send a Packet Too Big ICMP back to the sender.</p>
          <p>In IPv6, a router will always drop the packet and send back a Packet Too Big ICMP6 message to the sender. The endpoints use this to make a path MTU discovery to figure out what the optimal so-called maximum transfer unit (MTU) along the path between the two hosts is. Only when the upper layer has a minimum payload size that is too big for this MTU will IPv6 use fragmentation. With TCP over IPv6, this is not the case.</p>
              </div>`
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
      </table>`
  },
  {
    question: 'Які протоколи юзають TCP,  які UDP',
    answer: 'TCP: HTTP, HTTPs, FTP, SMTP, Telnet <br> UDP:DNS, DHCP, TFTP, SNMP, RIP, VOIP.'
  },
  {
    question: 'Чому коли ми розробляємо аплікейшин, перший файл який прилітає має бути меншим за 14 байт?',
    answer: 'I guess its good for performance as there would be no need for tcp to request another files'
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
      '</ul>'
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
    </div>`
  },
  {
    question: 'HTTP VS HTTPS',
    answer: 'HTTPS vs HTTP<br>' +
      'HTTP lacks a security mechanism to encrypt the data, whereas HTTPS provides TLS Digital Certificate to secure the communication between server and client.<br>' +
      'HTTP operates at an Application Layer, whereas HTTPS operates at Presentation Layer.<br>' +
      'HTTP by default operates on port 80, whereas HTTPS by default operates on port 443.<br>' +
      'HTTP transfers data in plain text while HTTPS transfers data in ciphertext (encrypt text).<br>' +
      'HTTP is fast as compared to HTTPS because HTTPS consumes computation power to encrypt the communication channel.'
  },
  {
    question: 'Різниця між SSL i TLS',
    answer: 'Transport Layer Security (TLS) is the latest version of the Secure Socket Layer (SSL) protocol. Both protocols ensure data privacy and authenticity over the internet. These widely used protocols provide end-to-end security by applying encryption for web-based communication. However, despite the similarities of TLS and SSL, they have significant differences, too.<br>' +
      'the protocols accomplish three fundamental goals of security:<br>' +
      `<ul> <li> <strong>Confidentiality:</strong> Encrypts data to hide it from third parties such that only an intended recipient can view the content. </li> <li> <strong>Integrity:</strong> Applies message authentication code to verify encrypted message content. </li> <li> <strong>Authentication:</strong> Authenticates the website/client/server's identity with the help of a certificate to ensure parties exchanging information cannot back off from their identity. </li> </ul> <br>
       <br>Differences:
      <table border="1" cellpadding="1" cellspacing="1"> <thead> <tr> <th scope="col">SSL</th> <th scope="col">TLS</th> </tr> </thead> <tbody> <tr> <td>SSL is a complex protocol to implement.</td> <td>TLS is a simpler protocol.</td> </tr> <tr> <td>SSL has three versions, of which SSL 3.0 is the latest.</td> <td>TLS has four versions, of which the TLS 1.3 version is the latest</td> </tr> <tr> <td>All SSL protocol versions are vulnerable to attacks.</td> <td>TLS protocol offers high security.</td> </tr> <tr> <td>SSL uses a message authentication code (MAC) after message encryption for data integrity</td> <td>TLS uses a hash-based message authentication code in its record protocol.</td> </tr> <tr> <td>SSL uses message digest to create a master secret.</td> <td>TLS employs a pseudo-random function to create a master secret.</td> </tr> </tbody></table>
    `
  },
  {
    question: 'Long pulling & short/ajax pulling',
    answer: 'In Ajax polling, a client makes XHR(XMLHttpRequest)/Ajax requests to the server repeatedly at some regular interval to check for new data. ' +
      '<br> Long polling is a technique where the server elects to hold a client connection open for as long as possible, delivering a response only after data becomes available or timeout threshold has been reached. After receiving a response client immediately sends the next request. On the client-side, only a single request to the server needs to be managed. When the response is received, the client can initiate a new request, repeating this process as many times as necessary.' +
      '<br>' +
      'Some challenges in long polling<br>' +
      'Message ordering and delivery guarantees. Message ordering cannot be guaranteed if the same client opens multiple connections to the server. If the client was not able to receive the message then there will be possible message loss.<br>' +
      'Performance and scaling<br>' +
      'Device support and fallbacks'
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
      'The client receives each event from the server and process it. If it receives a close signal from the server it can close the connection. The client can also initiate the connection close request.'
  },
  {
    question: 'What is WebRTC?',
    answer: `WebRTC is an HTML5 specification which we can use to add real time media communications directly between browser and devices.
      It's free. It is available in all modern browsers.WebRTC is not limited to only browsers because it is also available for mobile applications.
      WebRTC is not only about for voice or video calling. It is quite powerful because we
      can use it to build a group calling service, add recording to it or use it only for data delivery`
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
      '4. The connection will be closed once the server or the client decides to close the connection.'
  },
  {
    question: 'Як може закритись конекшин у веб сокеті',
    answer: 'The connection will be closed once the server or the client decides to close the connection.'
  },
  {
    question: 'Які протоколи є стейтфул, а які стейтлес. + навести приклади і чому вони такі',
    answer: 'UPD -stateless<br>' +
      'TCP - statefull<br>' +
      'HTTP - stateless<br>' +
      'Websokets - statefull<br>'
  },
  {
    question: 'HTTP є синхронним чи асинхронним. чому?',
    answer: 'синхронним'
  },
  {
    question: 'Що таке JSON RPC?',
    answer: `JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol. Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over http, or in many various message passing environments. It uses JSON (RFC 4627) as data format.
      <ul>
      <li>Transport independent protocol for web services. May work over HTTP as well as over TCP or WebSockets.</li>
      <li>In the case of HTTP works with a single resource (URL) and only one method (POST).</li>
      <li>All instructions (messages) send in a JSON format in a POST body.</li>
      <li>Messages are well specified and more flexible than the usage of HTTP for the same purposes.</li>
      </ul>`
  },
  {
    question: 'Який метод є обовязковим для JSON RPC? ',
    answer: 'POST'
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
    </table>`
  },
  {
    question: 'Болючий недолік JSON/RPC',
    answer: 'верне 200 статус навіть якщо еррорка, бо еррорка буде в тілі'
  },
  {
    question: 'XML/RPC',
    answer: 'It\'s remote procedure calling using HTTP as the transport and XML as the encoding. XML-RPC is designed to be as simple as possible, while allowing complex data structures to be transmitted, processed and returned.<br>' +
      'In XML-RPC, a client performs an RPC by sending an HTTP request to a server that implements XML-RPC and receives the HTTP response. A call can have multiple parameters and one result. The protocol defines a few data types for the parameters and result. Some of these data types are complex, i.e. nested. For example, you can have a parameter that is an array of five integers.\n' +
      '<br>' +
      'The parameters/result structure and the set of data types are meant to mirror those used in common programming languages.'
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
      'Uniform interface'
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
      'Safe HTTP methods could be cashed (by browser, proxy, gateway server).'
  },
  {
    question: ' Нащо нам боді? чому ми не можемо все передати в квері стрінгу',
    answer: '+ Любий мен ін зе мідл то може все побачити + обмеження по довжині і формату даних'
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
      '</ol>'
  },
  {
    question: 'Коли треба прагнути до 4 рівня, коли нам достатньо 3, а коли другого? (maturity level)',
    answer: `Залежить від розміру і довгостроковості проекту +гуд для аплікух які є в мережах зі слабкою мережею. + від типу додатку чи то веб сервіс чи щось локально.
    <br> Варто йти до 4 рівня, якщо у вас публічне апі, якщо у вас локальне, то достаньо 3, бо 4 важкий`
  },
  {
    question: 'HATEOAS Driven REST APIs',
    answer: `The term HATEOAS stands for the phrase Hypermedia As The Engine Of Application State. To understand this further, we first need to understand the meaning of Hypermedia.
    <br>The single most important reason for HATEOAS is loose coupling. If a consumer of a REST service needs to hard-code all the resource URLs, then it is tightly coupled with your service implementation. Instead, if you return the URLs, it could use for the actions, then it is loosely coupled. There is no tight dependency on the URI structure, as it is specified and used from the response.
    <br>The main reason I find HATEOAS useful is because it allows the backend to decide which actions are available so that the UI does not need to know the business logic. For example: a link to withdraw will be hidden if the account is below an amount that depends on many factors. The UI does not have to check the account balance, and check if the user has overdraft protection or keep changing the UI as the requirements change.`
  },
  {
    question: 'Недоліки REST',
    answer: ``
  },
  {
    question: 'REST vs SOAP',
    answer: `<table class="table table-striped" border="1" cellpadding="1" cellspacing="1" role="table">
      <tbody>
      <tr>
      <th scope="col"><strong>SOAP</strong></th>
      <th scope="col"><strong>REST</strong></th>
      </tr>
      <tr>
      <td>SOAP stands for Simple Object Access Protocol</td>
      <td>REST stands for Representational State Transfer</td>
      </tr>
      <tr>
      <td>SOAP is a protocol. SOAP was designed with a specification. It includes a WSDL file which has the required information on what the web service does in addition to the location of the web service.</td>
      <td>REST is an Architectural style in which a web service can only be treated as a RESTful service if it follows the constraints of being<p></p>
      <ol>
      <li>Client Server</li>
      <li>Stateless</li>
      <li>Cacheable</li>
      <li>Layered System</li>
      <li>Uniform Interface</li>
      </ol>
      </td>
      </tr>
      <tr>
      <td>SOAP cannot make use of REST since SOAP is a protocol and REST is an architectural pattern.</td>
      <td>REST can make use of SOAP as the underlying protocol for web services, because in the end it is just an architectural pattern.</td>
      </tr>
      <tr>
      <td>SOAP uses service interfaces to expose its functionality to client applications. In SOAP, the WSDL file provides the client with the necessary information which can be used to understand what services the web service can offer.</td>
      <td>REST use Uniform Service locators to access to the components on the hardware device. For example, if there is an object which represents the data of an employee hosted on a URL as http://demo.guru99  , the below are some of URI that can exist to access them.<p></p>
      </td>
      </tr>
      <tr>
      <td>SOAP can only work with XML format. As seen from SOAP messages, all data passed is in XML format.</td>
      <td>REST permits different data format such as Plain text, HTML, XML, JSON, etc. But the most preferred format for transferring data is JSON.</td>
      </tr>
      </tbody>
      </table>`
  },
  {
    question: 'REST vs GraphQL',
    answer: `<div>
    <h4>Key Differences between GraphQL and REST</h4>
    <ul>
    <li>GraphQL is an application layer server-side technology that is used for executing queries with existing data, while REST is a software architectural style that defines a set of constraints for creating Web services.</li>
    <li>GraphQL can be organized in terms of a schema, whereas REST can be arranged in terms of endpoints.</li>
    <li>The development speed in GraphQL is fast, while the development speed in REST is Slow.</li>
    <li>The message format for GraphQL mutations should be a string, while the message format for REST mutations can be anything.</li>
    <li>GraphQL uses metadata for query validation, whereas REST does not have machine-readable metadata cacheable.</li>
    </ul>
    </div>`
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
    <br><br>
    It is statically typed, so you do not need to define variable before using it.<br>
    GraphQL can decouple frontend from backend.<br>
    No over or under fetching of data.<br>
    It is language and HTTP agnostic.<br>
    Documentation of GraqphQL comes with no extra cost.<br>
    It helps you to save bandwidth.
    <br><br>
    React framework Gatsby uses GraphQL. верне 200 статус навіть якщо еррорка, бо треба хендлити вручну. Завжди шлеться тільки POST request`
  },
  {
    question: 'Що таке Reverse Proxy?',
    answer: `Privatbank example, CORS example`
  },
  {
    question: 'What\'s Open API?',
    answer: `The OpenAPI Specification is a standard format to define structure and syntax REST APIs. OpenAPI documents are both machine and human-readable, which enables anyone to easily determine how each API works. Engineers building APIs can use APIs to plan and design servers, generate code and implement contract testing. Former Swagger specification.
      <br>
      Pros <br>
      Generate accurate documentation<br>
      Create stub code for API development<br>
      Build mock servers to prototype the interface<br>
      Test that API requests and responses match the intended contract`
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
    Cannot be used for documenting APIs with one URL and one method (level 0 from the Richardson Maturity Model HTTP), e.g., JSON-RPC`
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
      It's Less powerful than Swagger tools.`
  },
  {
    question: 'В чому різниця Open API і Swagger?',
    answer: `
      Open API це специфікація - описує формат даних,
      Swagger - це тула яка дозволяє генерити специфікацію і юзати її`
  },
  {
    question: 'What is Postman? How to use?',
    answer: 'Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated. <br>' +
      'Postman is an application that allows us to test APIs utilizing a graphical user interface. <br>' +
      'Some of Postman’s advantages include the collection feature and the possibility to create different testing environments. <br>' +
      'Postman is a user-friendly tool that helps us optimize our time when executing tests.'
  },
  {
    question: 'How to organize work with backend and frontend. Approaches',
    answer: `Contract-first/code-first
      Ми можемо робити версії Апішки також
      + є різні падходи версійності (але це більш бекендне + це додаткове комплексіті, а це боль)`
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
      'higher coupling with implementation details (programming language, platform)'
  },
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
    </ul>`
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
    </ul>`
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
    </ul>`
  },
  {
    question: 'Принцип нульової довіри.',
    answer: `Zero trust is a security strategy that assumes all users, devices and transactions are already compromised.`
  },
  {
    question: 'Що таке CORS',
    answer: ``
  },
  {
    question: 'Які обмеження ми можемо встановити використовуючи CORS',
    answer: ``
  },
  {
    question: 'За допомогою якого метода відправляється Preflight request.',
    answer: `OPTIONS`
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
      Server-Side Request Forgery `
  },
  {
    question: 'З якими ішьюсами стикалась на проекті.',
    answer: ``
  },
  {
    question: 'Що таке інджекшини. Як їх превентати?',
    answer: ``
  },
  {
    question: 'Як захиститись від фішингу?',
    answer: ``
  },
  {
    question: 'XSS атака. Що це? Її види, як захиститись (як юзер і як дев)?',
    answer: ``
  },
  {
    question: 'Vulnerable and Outdated Components атака. Як щоб превентати?',
    answer: ``
  },
  {
    question: 'Які є тули щоб превентати секюріті ішьюс? Статік енд динамік секюріті чек?',
    answer: `SonarQube - статичний <br>
      BluckDuck i VeraCode - динамічний<br><br>
      Статичний - без запуску код<br>
      Динамічний - в ран таймі`
  },
  {
    question: 'Broken Access Control атака? Як превентати?',
    answer: ``
  },
  {
    question: 'Sensitive Data Exposure (old name). Cryptographic Failures атака. Як превентати?',
    answer: ``
  },
  {
    question: 'Що таке Sensitive data?',
    answer: `Sensitive data is confidential information that must be kept safe and out of reach from all outsiders unless they have permission to access it. (date of birth, password, credit cards etc)`
  },
  {
    question: 'Insecure Design атака. Як превентати?',
    answer: ``
  },
  {
    question: 'SSDLC',
    answer: ``
  },
  {
    question: 'Security Misconfiguration атака. Як превентати?',
    answer: ``
  },
  {
    question: 'Яка різниця між аутентифікація і авторизація.',
    answer: ``
  },
  {
    question: 'Identification and Authentication Failures атака. Як привентати?',
    answer: ``
  },
  {
    question: 'Software and Data Integrity Failures (old name - Insecure Deserialization) атака. Як превентати?',
    answer: ``
  },
  {
    question: 'Що таке сереалізація і десереалізація?',
    answer: ``
  },
  {
    question: 'Security Logging and Monitoring Failures (old name - Insufficient Logging & Monitoring) атака. Як привентати?',
    answer: ``
  },
  {
    question: 'Server-Side Request Forgery атака. Як привентати?',
    answer: ``
  },
  {
    question: 'AUTH types.',
    answer: ``
  },
  {
    question: 'Яка у мене на проекті ауторизація. Який auth type.',
    answer: ``
  },
  {
    question: 'Що таке OAUTH? 1.0 / 2.0',
    answer: ``
  },
  {
    question: 'OAUTH переваги',
    answer: ``
  },
  {
    question: 'Що таке Single sign-on (SSO)?',
    answer: ``
  },
  {
    question: 'Що таке PKCE?',
    answer: ``
  },
  {
    question: 'Bearer VS JWT token',
    answer: ``
  },
  {
    question: 'Angular & Security',
    answer: ``
  }
];
