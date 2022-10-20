export const CARDS = [
  {
    question: 'Для чого нам парадигми програмування?',
    answer: `Paradigms are important because they define a programming language and how it works.
    A great way to think about a paradigm is as a set of ideas that a programming language can use to perform tasks
    in terms of machine-code at a much higher level.Certain paradigms are better suited for certain types of problems,
    so it makes sense to use different paradigms for different kinds of projects.`,
    category: "programming-paradigms"
  },
  {
    question: 'Imperative vs Declarative. Що вони значать, для чого вони?',
    answer: 'Imperative code (HOW) is where you spell out each step of how you want something done, whereas with declarative code you merely say what it is that you want done',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке ООП? Розповісти про їх стовпи. + Приклади з життя',
    answer: 'OOP is programming paradigm that represents program entities throughout the object and defines how we can interact with this objects.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Abstraction?',
    answer: `The process of generalization (also modeling). We replace a particular thing by its more general model. Allow us not to be coupled with implementation details, to use any implementation, satisfying specific interface.
An abstract class is a class with at least one abstract method. Abstract class's non-abstract methods can have implementations, but a class itself can't.
An interface is an abstract class, which methods are only abstract.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Polymorphism?',
    answer: `Is an ability to have different forms for the same object's property. Applicable to the OOP, it's a possibility to call a method with a specific name and get different results depending on the call's details.
We can determine:
static (compile-time) polymorphism / overloading:
one method of one class has several implementations depending on its params;
dynamic (run time) polymorphism / overriding
several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass's method overrides superclass's method.
In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Inheritance?',
    answer: `Is an ability of a class/object to take some properties from another class/object. In both classical OOP, and JS we can inherit a whole method. As for fields: in classical OOP, we can only inherit its name and type - in JS, we can inherit a field value in addition.
Types:
single (superclass -> subclass)
multilevel (superclass -> subclass -> subsubclass)
hierarchical (superclass -> (subclass1 subclass2))
multiple ((superclass1 superclass2) -> subclass)
hybrid (mix of above)`,
    category: "programming-paradigms"

  },
  {
    question: 'Що таке Encapsulation?',
    answer: 'Is hiding information inside a particular namespace (container) to limit direct communication with it. We can have one object/class consisting of different variables and functions. Encapsulation prevents or restricts (e.g., read but not write) interaction with some of them.',
    category: "programming-paradigms"
  },
  {
    question: 'Типи Поліморфізму.',
    answer: 'We can determine:<br>' +
      '<br>' +
      'static (compile-time) polymorphism / overloading:<br>' +
      'one method of one class has several implementations depending on its params;<br>' +
      'dynamic (run time) polymorphism / overriding<br>' +
      'several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass\'s method overrides superclass\'s method.<br>' +
      'In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`<br>',
    category: "programming-paradigms"

  },
  {
    question: 'Що таке композиція? В контексті програмування',
    answer: 'Function composition is the process of combining two or more functions in order to produce a new function or perform some computation. For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript. Understanding function composition is an important step towards understanding how software is constructed using the functional programming. ' +
      '' +
      'OR'+
      `is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result.
Sometimes it's hard to read multiply nested functions in a composition, so it's a bit more clear with the helpers like compose.
A useful method for function composition in JavaScript is reduceRight.`,
    category: "programming-paradigms"

  },
  {
    question: 'Обєктна композиція що це таке?',
    answer: '',
    category: "programming-paradigms"

  },
  {
    question: 'Composition over inheritance<br>',
    answer: `Software development is mostly about a function composition or an object composition. Hence we compare it with inheritance let's talk about object composition here. It refers to combining objects into more complex ones.
Cons of inheritance:
The tight coupling problem: Because child classes are dependent on the implementation of the parent class, class inheritance is the tightest coupling available in object-oriented design.
The fragile base class problem: Due to tight coupling, changes to the base class can potentially break a large number of descendant classes — potentially in code managed by third parties. The author could break code they’re not aware of.
The inflexible hierarchy problem: With single ancestor taxonomies, given enough time and evolution, all class taxonomies are eventually wrong for new use-cases.
The duplication by necessity problem: Due to inflexible hierarchies, new use cases are often implemented by duplication, rather than extension, leading to similar classes which are unexpectedly divergent. Once duplication sets in, it’s not obvious which class new classes should descend from or why.
The gorilla/banana problem: “…the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong, “Coders at Work”
Function composition is very similar to object composition and has its pros over an inheritance.`,
    category: "programming-paradigms"
  },
  {
    question: 'Як можна атоматизувати функціональну композицію?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Pure function?',
    answer: `Pure function is a function which returns the same result for the same arguments and dont have
     any side effects. We can decide as side effects such things console.log or reassigning some variable in another scope.
     So, should not write any data in console, alerts etc and it should not interact with other scopes.
     `,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке ідемпотична функція?',
    answer: 'A function is said to be idempotent if it returns the same output for the same input or does what we expect it to do. Idempotence is different from pure function as it allows side effects. An example could be calling an API with an input and returning the same output no matter how many times it has been called.',
    category: "programming-paradigms"

  },
  {
    question: 'Whats referential transparency?',
    answer: `Referential transparency
is a property of an expression to stay the same after replacing it with its corresponding value (and vice-versa). Pure functions are always referentially transparent, and we can easily replace them with their output.`,
    category: "programming-paradigms"

  },
  {
    question: 'Що таке first class functions/ citizens?',
    answer: 'In case of first class functions we decide function like an variable and can operate it',
    category: "programming-paradigms"
  },
  {
    question: 'Як зрозуміти що мова володіє фірс-класс фанкшинами?',
    answer: 'To check whether programming language supports first-class functions we can create variable and assign some function to it. If it works OK, this means that language supports first class functions',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке high order functions (HOF)?',
    answer: 'HOF is a function which accepts function and/or return another function. Examples: array methods (map, filter), bind, pipe',
    category: "programming-paradigms"
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
In contrast, strong immutability means the impossibility of changing anything about an object's state, neither fields nor values. In JavaScript, under the hood, e.g., strings are strongly immutable (but in the language user's point of view, all the primitives in JS are weakly immutable till you do not force them to strong immutability with the const keyword).`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Шеред стейт?',
    answer: 'A shared state is any variable, object, or memory space that exists in a shared scope. Any non-constant variable used by multiple separate scopes, including the global scope and closure scopes, is considered to be in a shared state. In functional programming, shared states should be avoided. A shared state prevents a function from being pure. When the shared state rule is violated and the program modifies a variable, a side effect is created. In OOP, shared states are often passed around as objects. OOP functions may modify the shared state. This is very much against functional programming rules.',
    category: "programming-paradigms"
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
In a case that only the last request is needed, save a session object and handle only the request with the correct session.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке рекурсія?',
    answer: `Recursion is a process of calling itself. A function that calls itself is called a recursive function.
    A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.<br>
Tailed recursion<br>
is about a recursive function which calls itself in exactly the last step of executing.
<br>
Pros and Cons
+ If it's pure, intermediate results can be cached.
+ Tailed recursive function can be transformed to cycle by compiler (in some languages, including JavaScript).
+ Easier to read solution of problem.
- Possible performance issues (each step allocates the whole function environment in memory again).
- Limited in calls number.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що вигідніше рекурсія чи ітерація?',
    answer: 'Iteration. If we are not running through some tree',
    category: "programming-paradigms"
  },
  {
    question: 'Execution context stack',
    answer: 'The Execution Stack, also known as the Call Stack, keeps track of all the Execution Contexts created during the life cycle of a script. JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time.',
    category: "programming-paradigms"
  },
  {
    question: 'Чого бракує в джс для рекурсії на відміну від інших функціональних мов?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'What is tail call optimization?',
    answer: `Tail Call Optimization is related to a specific type of optimization that can occur with function calls. According to Kyle Simpson, a tail call is a function call that appears at the tail of another function, such that after the call finishes, there’s nothing left to do.
Tail code optimization takes a recursive function and generate an iterative function using “goto” internally, and then execute it. It does not limit the stack calls because there are none and the function is not a recursive function more. The performance of this iterative function is equivalent to its recursive function.
In other words, tail call optimization means that it is possible to call a function from another function without growing the call stack.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Currying and Partially Application?',
    answer: 'Currying: A function returning another function that might return another function, but every returned function must take only one parameter at a time. Partial application: A function returning another function that might return another function, but each returned function can take several parameters.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке фанктор?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке МОнада?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Плюси і мінуси ООП',
    answer: `
    Advantages:
    We can reuse the code multiple times using class
    Inherit the class to subclass for data redundancy
    It is easy to maintain and modify
    It maintains the security of data
    Low-cost development
    Disadvantages
    Size is larger than other programs
    It required a lot of effort to create
    It is slower than other programs
    It is not suitable for some sorts of problems
    It takes time to get used to it.`,
    category: "programming-paradigms"
  },
  {
    question: 'Плюси і мінуси функціонального програмування',
    answer: `FP pros and cons
Disadvantages
There is no efficient vocabulary for functional languages. Purely functional vocabularies work slower than the hash tables, and for some applications, this can be critical. Secondly, there is no purely functional weak hash map. Nevertheless, for most developers, this defect may remain unnoticed.
Functional programming is not suitable for algorithms in graphs (due to slow work) and in general for those solutions that for decades were based on imperative programming.
Check the lists of FP disadvantages on Quora and in the article by Alexander Alvin too.
Okay, the last point we mentioned is not very related to cons because we cannot blame functional programming for what it was not meant to be.
Advantages
Functional programming is famous for its high-level abstractions that hide a large number of details of such routine operations like iterating. This makes the code shorter and, as a consequence, guarantees a smaller number of errors that can be tolerated.
In the functional programming, there is a smaller number of language primitives. Well-known classes are not used in FP. Instead of creating a unique description of an object with operations in the form of methods, in functional programming, there are several basic language primitives that are well optimized inside.
Due to the language and structures flexibility, as a functional programming developer, you can bring the language closer to the problem. And not vice versa. In addition, FP offers some new and interesting tools for solving complex tasks that OOP developers often neglect.
Working with functional languages provides accurate and fast code writing, facilitates testing and debugging. You’re working with high-level programs, and the functions signatures are more informative.`,
    category: "programming-paradigms"
  },
  {
    question: 'Реактивне програмування. Що це таке? в чому його суть?',
    answer: 'Reactive programming is a programming paradigm for writing code, mainly concerned with asynchronous data streams. It is a programming of event streams that happens in time.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке реактивне функціональне програмування?',
    answer: 'The main idea of (functional) reactive programming is to build programs in a declarative way, by defining the streams, how they are linked together, and what happens if a new stream value arrives over time.' +
      `ORRRR
    Reactive programming is mostly like Functional programming where functions and data are combined with time and called streams. We can create a stream from anything: array, primitive value, etc. We can merge streams, composite them, have HoS (high order stream) which takes another stream as an input or gives as a result.
  A stream is a sequence of ongoing events ordered in time. Streams can emit three things: a value (of some type), an error, or a "completed" signal. To capture these emits you subscribe to a stream passing a function called observers (Observer design pattern).
On top of that ideas, we have a bunch of functions to help us handle streams with all the power of functionality.`,
    category: "programming-paradigms"
  },
  {
    question: 'Які можуть бути стріми в реактивному програмуванні?',
    answer: `Хот і колд і теплі (мікс хот і колд)
Приклад темплого обсервебла - якщо 2-3 рази підпишешсся. то він піде 3 рази. а так через мультикастинг , навітьякщо підпишемся 3 рази, то тіки запит піде 1 раз, а інши його будуть переюзувати`,
    category: "programming-paradigms"
  },
  {
    question: 'порівняння обсервеблів з промісом. Відмінності',
    answer: `
    Observables - Promises  -| <br>
    Emit multiple values over a period of time. - Emit a single value at a time.<br>
Are lazy: they’re not executed until we subscribe to them using the subscribe() method. - Are not lazy: execute immediately after creation. <br>
Have subscriptions that are cancellable using the unsubscribe() method, which stops the listener from receiving further values. - Are not cancellable. <br>
Provide the map for forEach, filter, reduce, retry, and retryWhen operators. - Don’t provide any operations. <br>
Deliver errors to the subscribers. - Push errors to the child promises.`,
    category: "programming-paradigms"
  },
  {
    question: 'що таке депенденсі інджекшин патерн?',
    answer: 'A direct instantiating object inside a class (e.g., in a constructor) leads to tight coupling and hard maintenance and is better to be avoided. Instead, we pass an object as an argument to a class method. At the same time, we lower coupling using an interface as a parameter type of this method.',
    category: "programming-paradigms"
  },
  {
    question: 'Які проблеми вирішує депенденсі інджекшин? які створює?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Інверсія контролю. +  Приклади',
    answer: 'Abbr IoC stands for inversion of control. This pattern includes dependency injection. The main idea is: code shouldn\'t decide when and where to instantiate objects. It\'s better to trust it to a controlling framework, a library, or your dedicated module. Either of them is generally called a container. So container plays a controlling role: knows and care about objects lifetime, allocates and eliminates them.',
    category: "programming-paradigms"
  },
  {
    question: `Pros and cons of reactive programming`,
    answer: `The most common example of RP in the JavaScript world is RxJS.
Pros:
writing declarative code
avoiding callback hell
purity
avoiding implementation details with a focus on business goals
Cons:
only hard debugging
making documentation
memory consumption,
time to start
managing concurrency
complexity of testing
a learning curve`,
    category: "programming-paradigms"
  },
  {
    question: 'Як відбувається комунікація в компютері?',
    answer: '',
    category: "programming-paradigms"
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
      <table>
      <thead>
      <tr>
      <th align="left">Practices</th>
      <th align="left">Details</th>
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


    `,
    category: 'security'
  },
  {
    question: 'Critical Rendering Path',
    answer: `How does the browser rendering engine work?<br><br>
    In order to render content the browser has to go through a series of steps:<br>
    <ol>
      <li><b>Document Object Model(DOM)</b>
      To process a html file and get to the document object model event(DOM) the browser has to go through 4 steps:
      <br>
        1. Convert bytes to characters<br>
        2. Identify tokens<br>
        3. Convert tokens to nodes<br>
        4. Build DOM Tree
      </li>
      <li><b>CSS object model(CSSOM)</b>
      Just as with HTML, the CSS rules need to be converted into something that the browser understands, so these rules go through the same steps as the document object model.
        <br>
        1. Convert bytes to characters <br>
        2. Identify tokens<br>
        3. Convert tokens to nodes<br>
        4. Build CSSOM<br>
        CSS is one of the most important elements of the critical rendering path, because the browser blocks page rendering until it receives and processes all the css files in your page, CSS is render blocking
      </li>
      <li><b>Render Tree</b>
        This stage is where the browser combines the DOM and CSSOM, this process outputs a final render tree, which contains both the content and the style information of all the visible content on the screen.
      <br>
      </li>
      <li><b>Layout</b>
        This stage is where the browser calculates the size and position of each visible element on the page, every time an update to the render tree is made, or the size of the viewport changes, the browser has to run layout again.
      </li>
      <li><b>Paint</b>
        When we get to the paint stage, the browser has to pick up the layout result, and paint the pixels to the screen, beware in this stage that not all styles have the same paint times, also combinations of styles can have a greater paint time than the sum of their parts. For an instance mixing a border-radius with a box-shadow, can triple the paint time of an element instead of using just one of the latter.
      </li>
    </ol>

    <img width="600" height="158" src="https://miro.medium.com/max/875/1*gouuTGXzSY2lDn_CS2cAfw.png">

    <br>
    There are only two cases when Javascript does not block on CSSOM:<br>
        1. Inlined scripts above the css files ‘<link>’ in the ‘<head>’;<br>
        2. Async scripts. <br>`,
    category: 'performance-optimization'
  },
  {
    question: 'Чи можемо ми спочатку загрузити джс, потім стилі. тобто чи ми зможемо змінити процес Critical Rendering path?',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Що в head tag можна включити?',
    answer: `Аналалітики, якісь гугл аналітики, щоб перформенс трекати, стилі, шрифти, джаваскрипт`,
    category: 'performance-optimization'
  },
  {
    question: 'Які атрибути ми можемо поставити щоб грузити js і не стопати браузер від рендеру?',
    answer: `Async i defer`,
    category: 'performance-optimization'
  },
  {
    question: 'Async &/vs Defer',
    answer: `В обох грузиться синхронно. Дефер зберігає послідовність виконання. З асинком, який найшвидше загрузиться, той і буде
    <br>
    Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering. So the user can read page content and get acquainted with the page immediately.

    But there are also essential differences between them: <br>
    <table>
    <thead>
    <tr>
    <th></th>
    <th>Order</th>
    <th><code>DOMContentLoaded</code></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><code>async</code></td>
    <td><em>Load-first order</em>. Their document order doesn’t matter – which loads first runs first</td>
    <td>Irrelevant. May load and execute while the document has not yet been fully downloaded. That happens if scripts are small or cached, and the document is long enough.</td>
    </tr>
    <tr>
    <td><code>defer</code></td>
    <td><em>Document order</em> (as they go in the document).</td>
    <td>Execute after the document is loaded and parsed (they wait if needed), right before <code>DOMContentLoaded</code>.</td>
    </tr>
    </tbody>
    </table>
    <br>
    In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.

    And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

    <br>
    <ul>
    <li><strong>Normal execution </strong><em><span style="color: #888888;">&lt;script&gt;</span></em><br>
    This is the default behavior of the &lt;script&gt; element. Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed.<strong></strong></li>
    <li><strong>Deferred execution </strong><em><span style="color: #888888;">&lt;script defer&gt;</span></em><br>
    Simply put: delaying script execution until the HTML parser has finished. A positive effect of this attribute is that the DOM will be available for your script. However, since not every browser supports defer yet, don’t rely on it!</li>
    <li><strong>Asynchronous execution </strong><em><span style="color: #888888;">&lt;script async&gt;</span></em><br>
    Don’t care when the script will be available? Asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it’s ready. I’d recommend this for scripts such as Google Analytics.</li>
    </ul>`,
    category: 'performance-optimization'
  },
  {
    question: 'Repaint & Reflow processes',
    answer: `C changing the input information which was used to construct the render tree may result in one or both of these:
    <ol>
        <li>parts of the render tree (or the whole tree) will need to be revalidated and the node dimensions recalculated. This is called a reflow, or layout, or layouting. Note that there’s at least one reflow — the initial layout of the page</li>
      <li>parts of the screen will need to be updated, either because of changes in geometric properties of a node or because of stylistic change, such as changing the background color. This screen update is called a repaint, or a redraw.

      </li>
      </ol>

        <br>
    Repaints and reflows can be expensive, they can hurt the user experience, and make the UI appear sluggish
    <br><br>
    <b>Repaint</b><br>
    As the name suggests repaint is nothing but the repainting element on the screen as the skin of element change which affects the visibility of an element but do not affects layout.
    Example.<br>
    1. Changing visibility of an element.<br>
    2. Changing an outline of the element.<br>
    3. Changing background.<br>
    Would trigger a repaint.
    <br><br>
    <b>Reflow </b><br>
    Reflow means re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document. Because reflow is a user-blocking operation in the browser, it is useful for developers to understand how to improve reflow time and also to understand the effects of various document properties (DOM depth, CSS rule efficiency, different types of style changes) on reflow time. Sometimes reflowing a single element in the document may require reflowing its parent elements and also any elements which follow it.`,
    category: 'performance-optimization'
  },
  {
    question: 'Застереження (warning?) до Repaint & Reflow',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Layout trashing',
    answer: `Layout thrashing occurs when we perform a series of consecutive reads and writes to DOM, in the process not allowing the browser to perform layout optimizations. Changing attributes of one element or modifying its content doesn't affect only that element; instead, it can cause a cascade of changes`,
    category: 'performance-optimization'
  },
  {
    question: 'Чи Reflow буде зачіпати всі елементи на сторінці чи не?',
    answer: `Так, буде зачіпати всі елементи, крім тих випадків коли елементи знаходяться  в іншому layer. (position: fixed or absolute. чи transform)`,
    category: 'performance-optimization'
  },
  {
    question: 'Які є способи анімувати контент на сторінці',
    answer: `
      <ol>
      <li>
      <strong>JavaScript</strong>
      <ol>
      <li>Use <code>requestAnimationFrame()</code> to control animations</li>
      <li>Use <code>requestIdleCallback()</code> to serve background work without impacting latency-critical events as animation and input response</li>
      </ol>
      </li>
      <li>
      <strong>CSS</strong>
      <ol>
      <li>Animate only CSS properties that don't trigger layout:
      <ul>
      <li><code>transform: translate()</code></li>
      <li><code>transform: rotate()</code></li>
      <li><code>transform: scale()</code></li>
      <li><code>opacity</code></li>
      </ul>
      </li>
      <li>For reasonable optimization use <code>will-change</code>
      </li>
      </ol>
      </li>
      <li>
      <strong>Web Animations API</strong>
      <ol>
      <li>It is one of the most performant ways to animate on the Web</li>
      </ol>
      </li>
      </ol>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Whats Request Animation Frame',
    answer: `requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.`,
    category: 'performance-optimization'
  },
  {
    question: 'Відмінність від absolute (top/ left) i transform?',
    answer: `transform дьоргає репейнт
      <br>Абсолют і репейнт і рефлов`,
    category: 'performance-optimization'
  },
  {
    question: 'will-change css property ',
    answer: `The will-change CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.`,
    category: 'performance-optimization'
  },
  {
    question: 'RAIL model',
    answer: `RAIL is a user-centric performance model that provides a structure for thinking about performance. The model breaks down the user's experience into key actions (for example, tap, scroll, load) and helps you define performance goals for each of them.
   <ul><li>Response time reflects how rapidly your website reacts to inputs. A response time under 100 ms feels immediate; <strong>anything slower is noticeable to the user</strong>.</li><li>Animation speed applies to any visual animations you have on the page as well as user scrolling and dragging. The ideal goal is <strong>60 FPS</strong>, or one frame every 16 ms.</li><li>Idle work refers to what is happening in the background of your website after it initially loads. Idle work should be divided into <strong>50 ms blocks</strong> so that it doesn't drag down response time.</li><li>Load, in the context of the RAIL model, means the first meaningful paint, which should appear <strong>less than one second after the user requests your page</strong>.</li></ul>
    <br><br>More detailed: <br>
    1. Respond to user inputs within 50 ms#<br>
    The Google Developer's Guide recommends providing some form of feedback for any user action that takes longer than 50 ms. That may sound like overkill, but aiming for such a goal ensures that the link between action and response always feels instantaneous to the user.
    <br>
    Let's say you have a button on your website that generates a random image on the page. If it takes 100 ms for the image to appear, then you should include something to let the user know that their input was received. For example, the button could change colors, or a placeholder graphic could appear while the image finishes loading.
    <br>
    2. Produce animation frames in 10 ms#<br>
    Loading indicators, scrolling, dragging and zooming are all considered animations under the RAIL model. If you're trying to achieve 60 FPS, then your budget per frame is theoretically 16 ms; however, browsers typically need about 6 ms just to render a frame, which is why you should shoot for 10 ms or less. Users can detect the slightest variations, so the animation speed must be consistent to maintain a sense of visual seamlessness.
    <br>
    3. Make the most of idle time#<br>
    To improve your chances of always achieving a 50 ms response time, you should make good use of idle time. Try loading only the most critical elements of your page during the initial page load, and then load everything else when the user is idle. That said, you must make sure that work performed during idle time doesn't interfere with responsiveness since that would defeat your purpose. Give user interactions the highest priority so that they interrupt idle work instead of the other way around.
    <br>
    4. Make your page interactive within five seconds#<br>
    Ideally, users should be able start interacting with your page within five seconds (at most) of requesting your URL for the first time. Based on research conducted by Google, websites that become functional in just five seconds achieve an average of 70 percent longer session lengths, 35 percent lower bounce rates and 25 percent higher ad views compared to slower websites. Furthermore, mobile sites that load within five seconds earn double the ad revenue of slower competitors.
    <br>
    As of 2018, the "five second rule" is a good target for mid-range mobile devices over a 3G connection. For returning visitors, utilize caching to aim for a two second load time. However, keep in mind that as technology continues to evolve, so will people's expectations. It is indeed true that people will keep growing more impatient as the internet gets faster.

    `,
    category: 'performance-optimization'
  },
  {
    question: 'PRPL model',
    answer: `PRPL is an acronym that describes a pattern used to make web pages load and become interactive, faster:
      <ul><li><strong>Preload</strong> the most important resources.</li><li><strong>Render</strong> the initial route as soon as possible.</li><li><strong>Pre-cache</strong> remaining assets.</li><li><strong>Lazy load</strong> other routes and non-critical assets.</li></ul>
    <p><strong>Preload</strong> is a declarative fetch request that tells the browser to request a resource as soon as possible. Preload critical resources by adding a <code>&lt;link&gt;</code> tag with <code>rel="preload"</code> to the head of your HTML document</p>
    <p>Extra efforts to render the first page as soon as possible (First Paint) are inlining resources or server-side rendering. The first violates cashing, the second can harm Time to Interactive.</p>
    <p>By acting as a proxy, service workers can fetch assets directly from the cache rather than the server on repeat visits. This not only allows users to use your application when they are offline, but also results in faster page load times on repeat visits.</p>
    <p>Split your code and push/preload or lazy load parts according to their usage.</p>`,
    category: 'performance-optimization'
  },
  {
    question: 'Як ми можемо поміряти перформенс. Чим і як при першій загрузці і при виконанні',
    answer: `
    <h1>Performance measurement and profiling</h1>
    <ul>
    <li>Use <strong>Search Console</strong>'s new Core Web Vitals report to identify groups of pages that require attention (based on the field data).</li>
    <li>Once you've identified pages that need work, use <strong>PageSpeed Insights</strong> (powered by Lighthouse and Chrome UX Report) to diagnose lab and field issues on a page. PageSpeed Insights (PSI) is available via Search Console or you can enter a URL on PSI directly.</li>
    <li>Ready to optimize your site locally in the lab? Use <strong>Lighthouse</strong> and <strong>Chrome DevTools</strong> to measure Core Web Vitals and get actionable guidance on exactly what to fix. The Web Vitals Chrome extension can give you a real-time view of metrics on a desktop.</li>
    </ul>
    <p><strong>Lab tools</strong> provide insight into how a potential user will likely experience your website and offer reproducible results for debugging. <strong>Field tools</strong> provide insight into how your real users are experiencing your website; this type of measurement is often called Real User Monitoring (RUM).</p>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Що таке Lighthouse?',
    answer: `
    <div class="markdown-body">
      <h2><a id="user-content-lighthouse" class="anchor" aria-hidden="true" href="#lighthouse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Lighthouse</h2>
      <p>Lab tool.</p>
      <p>Lighthouse is an automated website auditing tool that helps developers diagnose issues and identify opportunities to improve the user experience of their sites. It measures several dimensions of user experience quality in a lab environment, including performance and accessibility.</p>
      <p>All of the products that Lighthouse powers are updated to reflect the latest version, including <strong>Lighthouse CI</strong> which enables you to easily measure your Core Web Vitals on pull requests before they're merged and deployed.</p>
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/lighthouse1.webp" width="600px">
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/lighthouse2.webp" width="600px">

              </div>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Core Web Vitals',
    answer: `
      <div class="markdown-body">
                <h1><a id="user-content-core-web-vitals-is-an-umbrella-term-for-new-quality-factors-of-the-resource" class="anchor" aria-hidden="true" href="#core-web-vitals-is-an-umbrella-term-for-new-quality-factors-of-the-resource"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Core Web Vitals is an umbrella term for new quality factors of the resource</h1>
      <h2><a id="user-content-lcp--largest-contentful-paint" class="anchor" aria-hidden="true" href="#lcp--largest-contentful-paint"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>LCP — Largest Contentful Paint</h2>
      <p>Determines how quickly the largest and the most important content on the site loads.</p>
      <p>Reports the render time of the largest image or text block visible within the viewport relative to when the page first started loading.</p>
      <p>Sites should strive to have the Largest Contentful Paint of 2.5 seconds or less.</p>
      <h2><a id="user-content-fid--first-input-delay" class="anchor" aria-hidden="true" href="#fid--first-input-delay"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>FID — First Input Delay</h2>
      <p>Determines how quickly a user can start interacting with the site (click, scroll, etc.).</p>
      <p>FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.</p>
      <p>Sites should strive to have a First Input Delay of 100 milliseconds or less.</p>
      <h2><a id="user-content-cls--cumulative-layout-shift" class="anchor" aria-hidden="true" href="#cls--cumulative-layout-shift"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>CLS — Cumulative Layout Shift</h2>
      <p>Determines how much the layout is shifted and if it's stable or not.</p>
      <p>A layout shift occurs any time a visible element changes its position from one rendered frame to the next. CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.</p>
      <p>Sites should strive to have a CLS score of 0.1 or less.</p>


              <img width="600" src="https://web-dev.imgix.net/image/MtjnObpuceYe3ijODN3a79WrxLU2/wk3OTIdxFPoUImDCnjic.png?auto=format&w=964" alt="">
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Оптимізація при роботі з нетворком',
    answer: `<div class="markdown-body">
                <h1><a id="user-content-network-optimizations" class="anchor" aria-hidden="true" href="#network-optimizations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Network optimizations</h1>
        <p>Network optimizations (images, gzipping, bundling, etc)</p>
        <ul>
        <li>Enable HTTP/2</li>
        <li>Enable TLS 1.3</li>
        <li>Compress responses using Brotli or gzip</li>
        <li>Add caching information</li>
        <li>Optimize JavaScript / CSS files
        <ul>
        <li>Minify JavaScript / CSS files</li>
        <li>Bundle JavaScript / CSS files</li>
        <li>Async / Defer script</li>
        <li>Lazy load CSS</li>
        <li>Inline JavaScript / CSS</li>
        <li>Remove unused CSS rules</li>
        </ul>
        </li>
        <li>Reduce the number of redirections
        <ul>
        <li>Redirect directly to the final destination</li>
        <li>Use canonical instead of a redirection</li>
        <li>Use HSTS (HTTP Strict Transport Security)</li>
        </ul>
        </li>
        <li>Optimize images
        <ul>
        <li>Choose the right format</li>
        <li>Use the right image size</li>
        <li>Use Web Fonts for icons</li>
        <li>Minify FontAwesome</li>
        <li>Lazy load images</li>
        </ul>
        </li>
        <li>Move your servers near your visitors (GeoDNS, CDN)</li>
        <li>Resource Hints: Prefetch resources</li>
        <li>Remove unused resources/features
        <ul>
        <li>Replace social buttons scripts with static links</li>
        </ul>
        </li>
        <li>Minify HTML</li>
        <li>Automate almost everything!</li>
        </ul>
              </div>`,
    category: 'performance-optimization'
  },
  {
    question: 'Runtime performance optimization',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Web-workers (Types. Як працюють?)',
    answer: `
        Web workers dont have access to DOM, ні до нетворкінга. Просто ізольовний стрім для важких js калькуляцій)
        + не передавати будь який js код бо сесюріті
        <div class="markdown-body">

      <h2><a id="user-content-web-workers" class="anchor" aria-hidden="true" href="#web-workers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Web workers</h2>
      <p>Web workers can be used to offload pretty much any heavy processing from the main thread. A great example is the image processing web application, Squoosh, which uses web workers to handle image manipulation tasks, leaving the main thread available for the user to interact with the application without interruption.</p>
      <p>You can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object. E.g., localStorage, sessionStorage. But you can use a large number of items available under the window, including WebSockets, and data storage mechanisms like IndexedDB.</p>
      <p>Web workers are created using the Web Workers API. After creating a dedicated Javascript file for our worker, we can add it as a new Worker.</p>

      <p>Like all workers, web workers do not have access to the DOM, which means that any information needed will have to be passed between the worker and the main script using window.postMessage().</p>

      <p>In our worker script, we can listen for messages from the main script, and return a response.</p>

      <h2><a id="user-content-service-workers" class="anchor" aria-hidden="true" href="#service-workers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Service workers</h2>
      <p>Service workers are a type of workers that serve the explicit purpose of being a proxy between the browser and the network and/or cache.</p>
      <p>They are designed to be fully <strong>async</strong>; as a consequence, APIs such as synchronous XHR and Web Storage can't be used inside a service worker.</p>
      <p>Service workers only run over <strong>HTTPS</strong>, for security reasons.</p>
      <p><strong>Cache</strong> represents the storage for Request/Response object pairs that are cached as part of the ServiceWorker life cycle.</p>
      <p>Like web workers, service workers are registered in the main javascript file, referencing a dedicated service worker file</p>

      <p>Unlike regular web workers, service workers have some extra features that allow them to fulfil their proxy purpose. Once they are installed and activated, service workers are able to intercept any network requests made from the main document.</p>

      <p>Once intercepted, a service worker can, for example, respond by returning a document from the cache instead of going to the network, thereby allowing web applications to function offline!</p>
      <h2><a id="user-content-worklets" class="anchor" aria-hidden="true" href="#worklets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Worklets</h2>
      <p>Worklets are very lightweight, highly specific, workers. They enable us as developers to hook into various parts of the browser’s rendering process.</p>
      <p>The Paint Worklet allows us to create custom images that can be applied anywhere CSS expects an image, for example as a value to the background-image property.</p>
      <p>To create a worklet, as with all workers, we register it in our main javascript file, referencing the dedicated worklet file.</p>

      <p>In our worklet file, we can create a custom image. The paint method works very similarly to the Canvas API. Here’s an example of a simple black-to-white gradient.</p>

      <p>Finally, we can use this new worklet in our CSS, and the custom image we created will be applied like any other background image.</p>

      <p>In addition to the Paint Worklet, there are other worklets that hook into other stages of the rendering process. The Animation Worklet hooks into the Composite stage, and the Layout Worklet hooks in to the Layout stage.</p>
      <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
      <ul>
      <li><a href="https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/" rel="nofollow">Web workers vs Service workers vs Worklets</a></li>
      </ul>

              </div>`,
    category: 'performance-optimization'
  },
  {
    question: 'Memory leaks',
    answer: ` memory leaks can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory. Programming languages favor different ways of managing memory. These ways may reduce the chance of leaking memory. However, whether a certain piece of memory is unused or not is actually an undecidable problem. In other words, only developers can make it clear whether a piece of memory can be returned to the operating system or not.
    <br>
    <ol>
    <li>Accidental global variables</li>
    <li>Forgotten timers or callbacks</li>
    <li>Out of DOM references</li>
    <li>Closures</li>
    <li>Pieces of strings pointed to huge strings, which are considered removed</li>
    </ol>

    <br>How to detect memory leaks? ->
Chrome DevTools Memory tab.

You can see the current usage of memory, make a snapshot, profile memory.`,
    category: 'performance-optimization'
  },
  {
    question: 'Garbage colector. Algorithm. How to run it by ourselves',
    answer: `Trigerrs authomatically by browser. So there is no need to run it by ourselves <br>
    Most garbage collectors use an algorithm known as mark-and-sweep:
    <ol>
    <li>The garbage collector builds a list of "roots". Roots usually are global variables to which a reference is kept in code. In JavaScript, the "window" object is an example of a global variable that can act as a root.</li>
    <li>All roots are inspected and marked as active (i.e. not garbage). All children are inspected recursively as well. Everything that can be reached from a root is not considered garbage.</li>
    <li>All pieces of memory not marked as active can now be considered garbage. The collector can now free that memory and return it to the OS.</li>
    </ol>
    Modern garbage collectors improve on this algorithm in different ways, but the essence is the same: reachable pieces of memory are marked as such and the rest is considered garbage.
    <br>
      Unwanted references are variables kept somewhere in the code that will not be used anymore and point to a piece of memory that could otherwise be freed.
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Event loop',
    answer: `
    <div class="markdown-body">
                      <h1><a id="user-content-event-loop" class="anchor" aria-hidden="true" href="#event-loop"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Event Loop</h1>
      <p><code>Event loop</code> is a thing making all more complicated and more simple at the same time.
      It's an ugly child of a single-threaded language. But like a disabled person can create a beautiful symphony, it orchestrates parallel computations with surprising grace.</p>
      <p>Generally it's a cycle and can be implemented like this:</p>
      <div class="highlight highlight-source-js notranslate position-relative overflow-auto"><pre><span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-c1">true</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">gueue</span> <span class="pl-c1">=</span> <span class="pl-en">getNextQueue</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-s1">task</span> <span class="pl-c1">=</span> <span class="pl-s1">queue</span><span class="pl-kos">.</span><span class="pl-en">pop</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-en">execute</span><span class="pl-kos">(</span><span class="pl-s1">task</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

        <span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">microtaskQueue</span><span class="pl-kos">.</span><span class="pl-en">hasTasks</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span>
          <span class="pl-en">doMicrotask</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-en">isRepaintTime</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
          <span class="pl-s1">animationTasks</span> <span class="pl-c1">=</span> <span class="pl-s1">animationQueue</span><span class="pl-kos">.</span><span class="pl-en">copyTasks</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
          <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">task</span> <span class="pl-k">in</span> <span class="pl-s1">animationTasks</span><span class="pl-kos">)</span>
            <span class="pl-en">doAnimationsTask</span><span class="pl-kos">(</span><span class="pl-s1">task</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

          <span class="pl-en">repaint</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
      <span class="pl-kos">}</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
          <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="while (true) {
        gueue = getNextQueue();
        task = queue.pop();
        execute(task);

        while (microtaskQueue.hasTasks())
          doMicrotask();

        if (isRepaintTime()) {
          animationTasks = animationQueue.copyTasks();
          for (task in animationTasks)
            doAnimationsTask(task);

          repaint();
        }
      }" tabindex="0" role="button">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
          <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
      </svg>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
      </svg>
          </clipboard-copy>
        </div></div>
      <p>Or be represented as in this simplified diagram:</p>
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/event-loop.png" width="600px">
      <h2><a id="user-content-queues" class="anchor" aria-hidden="true" href="#queues"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Queues</h2>
      <ul>
      <li>
      <strong>Task Queues</strong>. Everything, except microtasks, is a task. There are several task queues with different priorities. Like:
      <ul>
      <li><code>&lt;script&gt;</code></li>
      <li><code>Timers</code></li>
      <li>user input (mouse, keyboard events, etc.)</li>
      <li>any unspecified callbacks</li>
      </ul>
      </li>
      <li>
      <strong>Microtask Queue</strong>. There are only a few things you can do to create a microtask:
      <ul>
      <li>any <code>Promise</code>
      </li>
      <li>
      <code>MutationObserver API</code> callback</li>
      <li><code>queueMicrotask()</code></li>
      </ul>
      </li>
      <li>
      <strong>RequestAnimationFrame task Queue</strong>. It fires at a specific time repeatedly (mostly every 16 ms).</li>
      </ul>
      <h2><a id="user-content-how-it-works" class="anchor" aria-hidden="true" href="#how-it-works"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>How it works</h2>
      <ol>
      <li>First, the browser queues scripts from <code>&lt;script&gt;</code> or <code>&lt;link&gt;</code> tags in the Task queue. Then starts to execute them one by one. Any function it meets during execution is placed into the Call Stack and removed from it after reaching either the return statement or their end.</li>
      <li>Any callback met here, such as <code>setTimeout</code> callback or user input handler, browser queues into an according Task Queue. Any Promise met the browser queues into Microtasks Queue. And call of the <code>requestAnimationFrame</code> - into RequestAnimationFrame task Queue.</li>
      <li>After the Call Stack has been emptied the browser pop one task from a Task Queue. There works a FIFO rule within some particular Task Queue but the browser can choose the next Task Queue in any order. Then, the browser executes a task the same way as with the script above (at 1.). It queues anything needed as in 2.</li>
      <li>If the Microtask Queue is not empty, the browser will empty it executing microtasks one by one, after any finished task.</li>
      <li>The browser idles for a while.</li>
      <li>When some time is reached the browser pop the first <code>requestAnimationFrame</code> callback from its queue, executes as other tasks and then starts the render process.</li>
      </ol>
              </div>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'javascript obfuscation and minification',
    answer: `Minifying your code means reducing its size to make it faster - download faster, parse faster, maybe even run faster.
    <br>
    Obfuscating your code means making it as unreadable as possible, to thwart others from understanding it. Best case scenario, it might be to hide intellectual property.`,
    category: 'performance-optimization'
  },
  {
    question: 'Angular performance Optimization technics',
    answer: `
    <div><div class="ix iy iz ja jb"><h2 id="347c" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">Optimization Techniques</h2><h2 id="7c13" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">1: OnPush change detection strategy</h2><p id="21df" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">Default Change Detection: </strong>Angular detects the changes in the application, within the tree of components. It starts by checking the root component, then its children, then its grand-children, until all components are checked. Then all the necessary DOM updates are applied in one batch.</p><p id="c818" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">OnPush Change Detection</strong>: With the OnPush change detection strategy, we can tell Angular not to check each component, every time the change detection runs.</p><h2 id="1580" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">2: Detach Change Detection/NgZone</h2><p id="57a4" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph=""><mark class="tt tu hv">Every component in an Angular project tree has a change detector which creates a change detection tree.</mark> Whenever some change occurs, these change detectors tell Angular about the change which further updates the DOM accordingly.</p><p id="2eb3" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">This is done by the use of the <strong class="ko tv">ChangeDetectorRef</strong> class. Using this change detection reference instance we can <strong class="ko tv">detach </strong>the change detection from any component where it is not necessary to check for changes with each change detection cycle. We can attach the change detection back anytime we want using the ChangeDetectorRef instance.</p><h2 id="a57c" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">3: Using Pure Pipes</h2><p id="d3df" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">In Angular Pipes are used to format data. Using a pipe is also more performant. There are two types of pipes, pure and impure. By default, a pipe is “<strong class="ko tv">pure</strong>”.</p><h2 id="3860" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">4: AOT Compilation</h2><p id="f7f2" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">JIT compiles your app at <strong class="ko tv">runtime</strong>, and ahead-of-time (AOT) compilation occurs at build time. By default, the development compilation uses the JIT compilation. With <strong class="ko tv">JIT </strong>compilation, the compiler is also part of the bundle, and code is compiled at runtime. This can increase the rendering time of the components.</p><p id="40d5" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">AOT </strong>anticipates compilation at <strong class="ko tv">build time</strong>, produces only the compiled templates, and removes the Angular compiler from the deployment bundle, which reduces your app payload by around 1MB (roughly the size of the Angular compiler) and rendering time is increased significantly.</p><h2 id="5608" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">5: Lazy Loading</h2><p id="4964" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">This is a performance impacting issue and can be solved by <strong class="ko tv">using Lazy Loading</strong>. With lazy loading, we can split our application to feature modules and load them on-demand. The main benefit is that initially, we can only load what the user expects to see at the start screen. The rest of the modules are only loaded when the user navigates to their routes. This improves application load time with a great deal.</p><h2 id="bb10" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">6: Trackby</h2><p id="6d4e" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">Angular user *ngFor structural directive to loop over data and manipulate the DOM by adding and removing DOM elements. However, if not used well, it may damage your app’s performance.</p><h2 id="76ad" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">7: Web Workers</h2><p id="8c38" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">The solution to this is Web Workers. The Web Worker will create a new thread called the <strong class="ko tv"><em class="tw">Worker Thread</em></strong> that will run a JS script parallel to the DOM thread. The JS script run by the Worker thread would not have a reference to the DOM because it is running in a different environment where no DOM APIs exist.</p><h2 id="3649" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">8: Preloading Modules</h2><p id="3b4b" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">We have seen that with lazyloading, we load our featured modules on demand. There may be cases where we don’t want to load a feature module initially but we know that it is a popular module and it will be required soon. Once we’ve pulled down the initial bundle and loaded our application, there’s <strong class="ko tv">no reason to wait </strong>for a user to navigate to that popular feature before starting to load it. So its <strong class="ko tv">better to start loading it in the background</strong>. This is where preloading comes into play.</p><p id="6ce0" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">•Preload everything (PreloadAllModules)</p><p id="9cbc" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">• Don’t preload anything (NoPreloading)</p><p id="93bc" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">You can use one of the two default preloading strategies mentioned above, or you can write your own custom preloading strategy.</p><p id="c039" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">You can specify which preloading strategy you want to use by passing an option into the routing configuration. Preloading can have a positive performance impact.</p><h2 id="15fe" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">9: Resolve Guards</h2><p id="06ed" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">We can send the required HTTP call within the <strong class="ko tv">Resolve Guard</strong>, which will load the next component only if the HTTP call returns success. In case of error, it will not load the next component and displays an error on an already loaded component. This can save a lot of DOM rendering and destroying time and increases performance.</p><h2 id="33b3" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">10: Unsubscribe from Observables</h2><p id="0228" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">Observables have the <strong class="ko tv">subscribe </strong>method which we call with a callback function to get the values emitted. Now, if we subscribe to a stream the stream will be left open and the callback will be called when values are emitted into it anywhere in the app until they are closed by calling the <strong class="ko tv">unsubscribe </strong>method.</p></div></div>

    `,
    category: 'performance-optimization'
  },
  {
    question: 'Що таке SPA & MPA? Різниця',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Що таке PWA?',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Де легше реалізувати секрність в SPA чи MPA? ЧОМУ?',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Pros & Cons of SPA & MPA',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Що таке SSR? Pros & Cons',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Що таке SSR? Pros & Cons',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Що таке Angular Universal?',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: '',
    answer: ``,
    category: 'web-application-design'
  }
];
