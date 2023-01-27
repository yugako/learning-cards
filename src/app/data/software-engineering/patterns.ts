export const patternsCards = [
  {
    question: 'Що таке патерни? Які вони бувають?',
    answer: `
	<section id="design-patterns">
      <h2>Design Patterns</h2>
      <h3>Creational</h3>
      <ul>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/builder.html" target="_blank">Builder</a> - constructs complex objects by separating construction and representation</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/factory.html" target="_blank">Factory method</a> - creates objects without specifying the exact class to create</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/singleton.html" target="_blank">Singleton</a> - restricts object creation for a class to only one instance</li>
      </ul>
      <h3>Structural</h3>
      <ul>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/decorator.html" target="_blank">Decorator</a> - dynamically adds/overrides behaviour in an existing method of an object</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/facade.html" target="_blank">Facade</a> - provides a simplified interface to a large body of code</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/proxy.html" target="_blank">Proxy</a> - provides a placeholder for another object to control access, reduce cost, and reduce complexity</li>
      </ul>
      <h3>Behavioral</h3>
      <ul>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/chain-of-responsibility.html" target="_blank">Chain of responsibility</a> - delegates commands to a chain of processing objects</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/command.html" target="_blank">Command</a> - creates objects which encapsulate actions and parameters</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/iterator.html" target="_blank">Iterator</a> - implements a specialized language</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/mediator.html" target="_blank">Mediator</a> - allows loose coupling between classes by being the only class that has detailed knowledge of their methods</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/observer.html" target="_blank">Observer</a> - is a publish/subscribe pattern which allows a number of observer objects to see an event</li>
        <li><a href="https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/strategy.html" target="_blank">Strategy</a> - allows one of a family of algorithms to be selected on-the-fly at runtime</li>
      </ul>
    </section>
	--------------------------------------------------------------------------------
    Design patterns are advanced object-oriented solutions to commonly occurring software problems.  Patterns are about reusable designs and interactions of objects.  Each pattern has a name and becomes part of a vocabulary when discussing complex design solutions.
    They are categorized in three groups: Creational, Structural, and Behavioral.
    <ul>
<li>
<p><strong>Creational patterns</strong> provide object creation mechanisms that increase flexibility and reuse of existing code.</p>
</li>
<li>
<p><strong>Structural patterns</strong> explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.</p>
</li>
<li>
<p><strong>Behavioral patterns</strong> take care of effective communication and the assignment of responsibilities between objects.</p>
</li>
</ul>

<table class="table table-md bg-cream-100">
    <tbody><tr>
      <td class="border-0 p-10 font-weight-bold" colspan="2">Creational Patterns</td>
    </tr>
    <tr>
      <td style="width:25%;">&nbsp;&nbsp;<a class="nobr" href="/javascript/abstract-factory-design-pattern">Abstract Factory</a></td>
      <td style="width:75%;">Creates an instance of several families of classes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/builder-design-pattern">Builder</a></td>
      <td>Separates object construction from its representation</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/factory-method-design-pattern">Factory Method</a></td>
      <td>Creates an instance of several derived classes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/prototype-design-pattern">Prototype</a></td>
      <td>A fully initialized instance to be copied or cloned</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/singleton-design-pattern">Singleton</a></td>
      <td>A class of which only a single instance can exist</td>
    </tr>
  </tbody></table>

  <table class="table table-md bg-cream-100">
    <tbody><tr>
      <td class="border-0 p-10 font-weight-bold" colspan="2">Structural Patterns</td>
    </tr>
    <tr>
      <td style="width:25%;">&nbsp;&nbsp;<a class="nobr" href="/javascript/adapter-design-pattern">Adapter</a></td>
      <td style="width:75%;">Match interfaces of different classes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/bridge-design-pattern">Bridge</a></td>
      <td>Separates an object’s interface from its implementation</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/composite-design-pattern">Composite</a></td>
      <td>A tree structure of simple and composite objects</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/decorator-design-pattern">Decorator</a></td>
      <td>Add responsibilities to objects dynamically</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/facade-design-pattern">Facade</a></td>
      <td>A single class that represents an entire subsystem</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/flyweight-design-pattern">Flyweight</a></td>
      <td>A fine-grained instance used for efficient sharing</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/proxy-design-pattern">Proxy</a></td>
      <td>An object representing another object</td>
    </tr>
  </tbody></table>

  <table class="table table-md bg-cream-100">
    <tbody><tr>
      <td class="border-0 p-10 font-weight-bold" colspan="2">Behavioral Patterns</td>
    </tr>
    <tr>
      <td style="width:25%;">&nbsp;&nbsp;<a class="nobr" href="/javascript/chain-of-responsibility-design-pattern">Chain of Resp.</a></td>
      <td style="width:75%;">A way of passing a request between a chain of objects</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/command-design-pattern">Command</a></td>
      <td>Encapsulate a command request as an object</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/interpreter-design-pattern">Interpreter</a></td>
      <td>A way to include language elements in a program</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/iterator-design-pattern">Iterator</a></td>
      <td>Sequentially access the elements of a collection</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/mediator-design-pattern">Mediator</a></td>
      <td>Defines simplified communication between classes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/memento-design-pattern">Memento</a></td>
      <td>Capture and restore an object's internal state</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/observer-design-pattern">Observer</a></td>
      <td>A way of notifying change to a number of classes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/state-design-pattern">State</a></td>
      <td>Alter an object's behavior when its state changes</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/strategy-design-pattern">Strategy</a></td>
      <td>Encapsulates an algorithm inside a class</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/template-method-design-pattern">Template Method</a></td>
      <td>Defer the exact steps of an algorithm to a subclass</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;<a class="nobr" href="/javascript/visitor-design-pattern">Visitor</a></td>
      <td>Defines a new operation to a class without change</td>
    </tr>
  </tbody></table>
    `,
    category: 'patterns '
  },
  {
    question: 'Що таке Singleton? Яку проблему вирішує?',
    answer: `Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

The Singleton class declares the static method getInstance that returns the same instance of its own class.

The Singleton’s constructor should be hidden from the client code. Calling the getInstance method should be the only way of getting the Singleton object.
<br>
<div class="section pros-cons">
<h2 id="pros-cons"><i class="fa fa-balance-scale" aria-hidden="true"></i> Pros and Cons</h2>
<div class="row"><div class="col-sm-6">
<ul>
<li>
<i class="fa fa-fw fa-check" aria-hidden="true"></i> You can be sure that a class has only a single instance.</li>
<li>
<i class="fa fa-fw fa-check" aria-hidden="true"></i> You gain a global access point to that instance.</li>
<li>
<i class="fa fa-fw fa-check" aria-hidden="true"></i> The singleton object is initialized only when it’s requested for the first time.</li>
</ul>
</div><div class="col-sm-6">
<ul>
<li>
<i class="fa fa-fw fa-times" aria-hidden="true"></i> Violates the <em>Single Responsibility Principle</em>. The pattern solves two problems at the time.</li>
<li>
<i class="fa fa-fw fa-times" aria-hidden="true"></i> The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.</li>
<li>
<i class="fa fa-fw fa-times" aria-hidden="true"></i> The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.</li>
<li>
<i class="fa fa-fw fa-times" aria-hidden="true"></i> It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.</li>
</ul>
</div></div></div>
`,
    category: 'patterns '
  },
  {
    question: 'Що таке Builder? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Proxy? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Mediator? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Facad? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Decorator? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Fabric method? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Flyweight? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Observer? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке State? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Adapter? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Chain of resposibility? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Iterator? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Prototype? Яку проблему вирішує?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Bridge? Яку проблему вирішує?\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Event Path?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Які дизайн патерни використовує фреймворк під капотом?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке МVM patterns?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Який антепатерн може помогти вирішити пролему з розділенням?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'MVC, MVVM, MVP\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Flux?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Side management approach\n',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Що таке Redux?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Як варто створювати і зберігати стор? що таке нормалайзер?',
    answer: ``,
    category: 'patterns '
  },
  {
    question: 'Чим асинк пайп краще нiж сабскрайб?',
    answer: ``,
    category: 'patterns '
  },
]
