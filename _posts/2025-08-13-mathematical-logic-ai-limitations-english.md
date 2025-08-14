---
layout: post
title: "The Revival and Frustration of Mathematical Logic: Fundamental Limits of Formal Logic in the Age of Artificial Intelligence"
date: 2025-08-13
categories: [analysis]
tags: [mathematical-logic, formal-logic, artificial-intelligence, natural-language-processing, godel-incompleteness, philosophy-of-logic, AI-limitations, symbolic-AI]
lang: en
description: "Exploring the complex relationship between mathematical logic and current AI, this analysis examines the fundamental limitations of approaching natural language through formal logic and why mathematical logic is considered a 'dead discipline.' From Gödel's incompleteness theorems to modern neural network AI, we illuminate the past, present, and future of logic."
---

## Introduction: The Golden Age of Logic and the Silence That Followed

The intellectual revolution that occurred at the intersection of mathematics and logic in the early 20th century was one of the most dramatic moments in human intellectual history. Bertrand Russell and Alfred North Whitehead's *Principia Mathematica* (1910-1913) harbored the grand ambition of establishing all of mathematics on the foundations of logic, while David Hilbert presented his program to prove the completeness and consistency of mathematics. In those days, mathematical logic was regarded as the discipline exploring the purest form of human reason, filled with hope that a complete formal system could be created to mechanically derive all true propositions.

However, Kurt Gödel's incompleteness theorems of 1931 shattered all these dreams. His proof was more than just a mathematical theorem; it was a philosophical declaration revealing the fundamental limits of human reason and formal systems. That sufficiently powerful formal systems cannot prove their own consistency, and that there must exist true propositions that cannot be proven—this dealt a fatal blow to the dream of complete mechanical reasoning.

Nearly a century later, we once again face questions of logic and reasoning, though this time in the new context of artificial intelligence. The remarkable reasoning abilities demonstrated by large language models like ChatGPT seem to circumvent Gödel's limitations. But is this really the case? What is the relationship between mathematical logic and modern AI, and why do attempts to handle natural language through formal logic encounter limitations?

## The Birth and Dreams of Mathematical Logic: The Pursuit of Complete Formalization

In the late 19th and early 20th centuries, the crisis surrounding the foundations of mathematics catalyzed the development of mathematical logic. The paradoxes discovered in Cantor's set theory, particularly Russell's paradox, revealed how unstable the foundations of mathematics were. The response to this was the attempt to completely formalize mathematics.

**The ambition of Principia Mathematica** was to derive all mathematical truths from pure logical reasoning. Russell and Whitehead believed that natural numbers, real numbers, and more complex mathematical structures could be defined as combinations of logical concepts. If successful, mathematical reasoning could have become a completely mechanical process. For any mathematical question, we could have obtained answers simply by applying formal rules.

**Hilbert's program** was even more concrete. He sought to formalize all areas of mathematics through finite methods and prove that these formal systems were consistent and complete. His Entscheidungsproblem (decision problem) particularly asked whether there exists an algorithm to mechanically determine if a given mathematical proposition is true or false. If such an algorithm existed, all mathematical problems could ultimately be reduced to matters of computation.

These dreams didn't arise from mere mathematical curiosity. Behind them lay an **Enlightenment faith in human reason**. The belief that if rational reasoning could be completely formalized, all human intellectual activity could be mechanized. This would later become a foundational idea in artificial intelligence research.

But all these hopes began to crumble one by one in the 1930s. First, Gödel shattered Hilbert's dream of completeness with his incompleteness theorems, and Turing and Church showed that no general solution exists for decidability. **The trinity of Gödel-Turing-Church** ended the 19th century's optimism about the mechanical completeness of human reason.

## Gödel's Shock: The Philosophical Questions Posed by Incompleteness

Gödel's incompleteness theorems of 1931 were a philosophical earthquake that went beyond mere mathematical theorems. Simply put: in any consistent formal system powerful enough to include natural number arithmetic, there must exist true propositions that can neither be proven nor disproven within that system.

The core of the **First Incompleteness Theorem** lay in the paradox of self-reference. Gödel showed that one could construct within a formal system a proposition meaning "This proposition cannot be proven." If this proposition is provable, it becomes false, creating a contradiction; if unprovable, it becomes true, revealing incompleteness. This recalls Russell's paradox but was constructed in a more sophisticated and unavoidable form.

The **Second Incompleteness Theorem** was even more shocking. No consistent formal system can prove its own consistency. This completely frustrated Hilbert's pursuit of absolute certainty in mathematics. To guarantee the consistency of mathematics, we need a more powerful meta-system, and to guarantee that meta-system's consistency, we need yet another meta-meta-system, falling into infinite regress.

The **philosophical implications** of Gödel's results were interpreted in various directions. Some interpreted this as evidence of human intuition's superiority. Humans can "see" that the Gödel proposition is true, but machines cannot prove it. Scholars like Roger Penrose used this to argue that human consciousness contains something essentially non-computable.

Other interpretations were more modest. Gödel's results show the limits of formal systems, but this doesn't necessarily mean the infinity of human reason. Humans are also finite beings, and our mathematical intuition is ultimately just a product of evolutionary processes. From this perspective, both humans and machines have fundamental limitations; they just take different forms.

In terms of **relevance to modern AI**, Gödel's results carry even more complex meaning. The reasoning abilities demonstrated by large language models operate in completely different ways from traditional formal logic. They may not be directly confronting Gödel's limitations but operating in an entirely different paradigm.

## The Rise and Fall of Symbolic AI: Logic's First Attempted Revival

In the 1950s and 1960s, during the early stages of artificial intelligence research, mathematical logic seemed to experience a glorious revival. The approach called **Symbolic AI** or **GOFAI (Good Old-Fashioned AI)** sought to understand human intelligence as a process of logical reasoning and symbol manipulation.

The **LISP language**, developed by John McCarthy in 1958, was the first tool to implement this philosophy. While LISP was a language for list processing, its essence was implementing symbolic reasoning on computers. It involved expressing logical propositions through S-expressions and deriving new knowledge by manipulating them.

The emergence of **logic programming** was the culmination of this approach. Prolog, developed by Alain Colmerauer in 1972, directly implemented first-order logic as a programming language. In Prolog, facts and rules were described in logical form, and answers to queries were obtained through logical reasoning. This seemed like the realization of the mechanical reasoning Hilbert had dreamed of.

**Expert Systems** were the most successful application of symbolic AI in the 1970s-80s. MYCIN (medical diagnosis), DENDRAL (chemical structure analysis), XCON (computer system configuration) showed human expert-level performance in specific domains. The core of these systems was **rule-based reasoning**. They performed complex reasoning by logically connecting rules in the form "IF condition THEN conclusion."

However, from the late 1980s, symbolic AI began to encounter serious **limitations**. The most fundamental problem was the difficulty of **Common Sense Reasoning**. To express in formal logic the everyday knowledge that humans take for granted required an enormously complex and vast system of rules. Worse, the interactions between these rules became complex in unpredictable ways.

The **Frame Problem** was a symbolic example of these limitations. How do we distinguish what changes and what doesn't when an action is performed? When a robot moves a box in a room, the color of the walls doesn't change, nor do the positions of other boxes. But if we must explicitly describe all these "unchanging" aspects, the number of rules increases exponentially.

The **Combinatorial Explosion** problem was also serious. To model real-world complexity with logical rules, we must consider all possible cases. But this quickly grows to computationally intractable levels. This problem already appeared in games like chess or Go, and the real world was far more complex.

The **"AI Winter"** of 1987 was the cumulative result of these limitations. As excessive expectations for symbolic AI collided with reality, investment and interest in AI research sharply declined. The first attempted AI revival based on mathematical logic thus met with frustration.

## The Emergence of Connectionism and Logic's Marginalization

The **connectionist** revolution that began in the mid-1980s completely changed the paradigm of AI research. This movement, led by David Rumelhart and Geoffrey Hinton, sought to implement intelligence through **Artificial Neural Networks** that mimicked the brain's neural networks.

The rediscovery of the **backpropagation algorithm** was key to this change. Rumelhart and Hinton's 1986 paper "Learning representations by back-propagating errors" presented an effective method for training multilayer neural networks. This was a completely different approach from existing symbolic AI.

The **fundamental difference between symbolism and connectionism** lay in knowledge representation and processing. Symbolism represented knowledge through explicit symbols and rules, deriving new knowledge through logical reasoning. In contrast, connectionism stored knowledge distributedly in network weight patterns and processed information through parallel activation propagation.

This difference led to problems of **transparency**. Symbolic systems could track reasoning processes step by step. Expert systems could explain why they reached particular conclusions through chains of logical rules. But neural networks were "black boxes." The relationship between input and output consisted of complex interactions among millions of weights, making it difficult for humans to understand.

There were also significant differences in **learning ability**. Symbolic systems expanded knowledge by adding new rules or modifying existing ones. While explicit and structured, their ability to automatically learn patterns from large amounts of data was limited. In contrast, neural networks could learn directly from data and showed excellent performance especially in pattern recognition and classification problems.

These differences became even more pronounced in **language processing**. Symbolic natural language processing sought to explicitly describe grammatical and semantic rules, parsing sentences and extracting meaning through them. But the ambiguity and context-dependency of natural language made this approach extremely complex.

The connectionist approach introduced a new concept called **distributed representation**. Words or concepts were represented as points in high-dimensional vector space, with similar meanings learned to be placed in similar positions. This later evolved into **word embeddings**, becoming the foundation of modern natural language processing.

Despite connectionism's early successes, limitations remained clear in the 1990s and early 2000s. The **vanishing gradient problem** made it difficult to train deep networks, and computational resource constraints made it hard to tackle complex problems. During this period, mathematical logic was pushed to the periphery of AI research. Logicians began using increasingly different languages from AI researchers and became interested in different problems.

## The Deep Learning Revolution and Logic's Reexamination

Starting with Geoffrey Hinton's Deep Belief Networks in 2006, the **deep learning** revolution began. AlexNet's ImageNet victory in 2012 was a symbolic moment of this revolution, and since then, AI has developed at speeds we never imagined.

The emergence of the **Transformer architecture** particularly revolutionized natural language processing. Introduced in the 2017 "Attention Is All You Need" paper, Transformers could simultaneously model relationships between all words in a sentence through self-attention mechanisms. This was a completely different approach from existing recurrent neural networks (RNNs) or convolutional neural networks (CNNs).

The development of the **GPT (Generative Pre-trained Transformer) series** shows the pinnacle of this revolution. Starting with GPT-1 (2018), this series has shown remarkable progress through GPT-2 (2019), GPT-3 (2020), to GPT-4 (2023). GPT-3's 175 billion parameters in particular demonstrated text generation and reasoning abilities approaching human levels, surprising many.

But how these achievements **relate to mathematical logic** remains unclear. The reasoning abilities shown by modern large language models seem to operate very differently from traditional logical reasoning. They can solve complex reasoning problems without using explicit logical rules.

The concept of **"Emergent Abilities"** is one way to explain this phenomenon. When model scale exceeds certain thresholds, abilities not explicitly included in training data suddenly appear. Abilities like arithmetic operations, abstract reasoning, and code generation are such examples.

However, there's debate about whether these emergent abilities constitute **true logical reasoning**. Some researchers argue they merely memorize and recombine patterns from training data. Others counter that the boundary between pattern recognition and true understanding may not be so clear.

The emergence of **Chain-of-Thought prompting** added a new dimension to this discussion. The discovery that showing models step-by-step reasoning processes greatly improves performance on complex problems seemed similar to traditional logical reasoning. However, as examined in previous posts, fundamental limitations to this approach are being revealed.

Attempts to combine with **formal verification** are also noteworthy. Some researchers are trying to verify proofs generated by neural networks with formal logic systems, or conversely, to train neural networks on formal reasoning processes. This can be seen as a new attempt to combine symbolism and connectionism.

## Formal Logic and Natural Language: The Roots of Fundamental Mismatch

The attempt to analyze natural language through formal logic has been a long-standing dream of linguistic philosophy and logic. But as this dream collided with reality, the fundamental mismatches revealed clearly show the limitations of mathematical logic.

**Semantic complexity** is the first barrier. In formal logic, propositions have clear truth values of true or false. But sentences in natural language are far more complex. Consider the sentence "John is tall." The truth of this sentence depends on what "tall" means. Does it mean taller than average? Taller than a specific measurement? The speaker's subjective judgment?

The problem of **context dependency** is even more serious. The same sentence can have completely different meanings depending on the situation. "Could you open the door?" might be a simple question, a polite request, or sometimes a command. Capturing this with formal logic's rigid structure requires infinite contextual information.

**Non-monotonic reasoning** is one of the key characteristics of everyday reasoning. In formal logic, adding new premises leads to more or the same conclusions. But in natural language reasoning, new information can invalidate existing conclusions. From "Birds can fly" and "Tweety is a bird," we might conclude "Tweety can fly," but if we add "Tweety is a penguin," we must retract the conclusion.

**Ambiguity** is natural language's characteristic that formal logic finds most difficult to handle. Lexical ambiguity (whether "bank" means a financial institution or riverside), syntactic ambiguity (in "I saw the man on the hill with a telescope," who has the telescope?), pragmatic ambiguity (irony or metaphor) all fall into this category. Formal logic requires resolving such ambiguity in preprocessing, but in reality, ambiguity itself is often the source of natural language's richness and efficiency.

The **quantifier problem** is even more subtle. Formal logic's ∀ (all) and ∃ (some) have clear meanings, but natural language quantification expressions are far more complex. How do we formalize "most" in "Most students did well on the exam"? Expressions like "many," "several," "almost all" represent fuzzy quantification difficult to capture with binary formal logic.

From a **speech act theory** perspective, the problem becomes even more complex. Natural language isn't just a tool for expressing propositions but also **a tool for performing actions**. Speech acts like "I promise," "I command," "I apologize" don't describe states of the world but change the world. This aspect goes beyond the scope of traditional formal logic.

**Metaphor and metonymy** are central to natural language understanding but difficult to handle with formal logic. As Lakoff and Johnson showed in *Metaphors We Live By*, our everyday thinking deeply depends on metaphorical structures. Conceptual metaphors like "Time is money" and "Argument is war" aren't mere rhetorical decoration but form the structure of thought itself. But completely capturing such metaphorical structures with formal logic is nearly impossible.

## Computational Complexity Theory and Logic's Limits

Much of the fundamental limitations faced by mathematical logic stem from **computational complexity**. While Turing's halting problem and Gödel's incompleteness theorems showed the impossibility of logical completeness, computational complexity theory clarified practical limitations.

Even **propositional logic**'s satisfiability problem is NP-complete. That is, determining whether there exists a variable assignment making a given propositional formula true takes exponential time in the worst case with currently known algorithms. This means it's theoretically solvable but becomes computationally impossible with even slightly many variables.

The situation with **first-order logic** is even more serious. First-order logic's theorem proving problem is semi-decidable. We can find proofs for true propositions in finite time, but for false propositions, we don't know how long to wait. Furthermore, first-order logic's satisfiability problem is **undecidable**. This means it cannot be solved by general algorithms.

In **higher-order logic**, the situation worsens. Second-order logic can already express arithmetic's completeness, so Gödel's incompleteness theorems apply. That is, it cannot have both consistency and completeness. While mathematically interesting, such logic systems are difficult to use as practical reasoning tools.

Extended logic systems like **modal logic** or **temporal logic** suffer similar problems. As expressiveness increases, computational complexity increases dramatically. PSPACE-complete, EXPTIME-complete, and even undecidable problems abound.

From a **knowledge representation** perspective, these complexity problems directly impact actual AI system design. Using expressive logic languages allows precise description of complex knowledge, but deriving useful conclusions from that knowledge may become computationally impossible. Conversely, using computationally tractable restricted logic may not sufficiently capture real-world complexity.

This problem becomes clearer when **contrasted with machine learning**. Deep learning models learn mathematically very complex functions, but actual inference is performed relatively efficiently. While training is computationally intensive, inference with trained models is possible in polynomial time. This contrasts with formal logic's exponential complexity.

**Approximate reasoning** has been proposed as one answer to these complexity problems. Using probabilistic or heuristic methods instead of exact logical reasoning. Bayesian networks, Markov logic networks, and probabilistic programming are such examples. But these approaches also fundamentally face similar complexity problems.

## Mathematical Logic: A Dead Discipline or an Evolving One?

The provocative diagnosis that "mathematical logic is a dead discipline" is based on several observations. The most direct evidence is the **absence of new fundamental discoveries**. Since Gödel's incompleteness theorems (1931), Tarski's definition of truth (1936), and Church's undecidability (1936), no revolutionary discoveries comparable to these have emerged in mathematical logic.

While there have been important achievements like **Cohen's proof of the independence of the continuum hypothesis** (1963) and **Robertson-Seymour's graph minor theorem** (1980s), these are considered developments within existing frameworks. Major advances in mathematical logic since the 1970s have mostly focused on technical refinement or expansion of application areas.

**Ossification of research paradigms** is also cited as a problem. The four traditional areas—set theory, model theory, proof theory, and recursion theory—have remained largely unchanged for decades. While active research continues within each area, fusion between areas or creation of new fields is rare. This might signify the discipline's maturity, but it could also indicate stagnation.

**Disconnection from application fields** is an even more serious problem. As computer science rapidly developed, logical methods have been utilized in formal verification, programming language theory, and database theory, but these mostly remain applications of existing logic. The criticism is that new computational paradigms or AI developments aren't providing new problem consciousness to logic.

**Declining influx of talent** is also a worrying sign. The number of students majoring in logic in mathematics departments continues to decrease, and logic is increasingly marginalized in philosophy departments. Young researchers are gravitating toward more dynamic fields with higher application potential like machine learning, quantum computing, and bioinformatics.

However, **rebuttals** to this pessimistic diagnosis are substantial. First, we must consider mathematical logic's **fundamental character**. Logic is the discipline dealing with the foundations of mathematics. If the foundations aren't shaking, that's evidence of solidity, not a sign of stagnation. Gödel's results were so fundamental that subsequent developments might appear relatively minor in comparison.

**Proliferation in application areas** can also be interpreted as evidence of vitality. Hoare Logic used in program verification, relational algebra in databases, and Description Logic in artificial intelligence are all extensions or applications of logic. This might mean logic isn't dead but alive and spreading into other fields.

The **emergence of new logic systems** is also noteworthy. Linear Logic, Intuitionistic Logic, Relevance Logic, and Paraconsistent Logic are all attempts to overcome the limitations of traditional classical logic. While they haven't become mainstream, they show that logic is still evolving.

The development of **computational logic** is particularly noteworthy. This field addresses new problems at the boundary of logic and computation. The development of proof assistants like Coq, Lean, and Isabelle has enabled attempts to mechanize mathematical proofs themselves. This has the potential to fundamentally change the relationship between mathematics and logic.

**Combination with category theory** also presents new possibilities. Topos theory provides new perspectives connecting logic and geometry, and Homotopy Type Theory attempts to fuse logic, topology, and computer science. While these fields are still in early stages, they could suggest new directions for logic.

## Large Language Models and Logic: Possibilities for New Coexistence

The success of large language models we're currently witnessing provides both new opportunities and challenges for mathematical logic. While these models' reasoning abilities operate very differently from traditional formal logic, they're not entirely unrelated to logic.

**Neuro-Symbolic AI** is a research field exploring these new possibilities. This approach seeks to combine neural networks' learning abilities with symbolic logic's reasoning capabilities. For example, using neural networks to understand natural language, converting it to logical representations, then deriving conclusions with formal reasoning engines.

**Program synthesis** is a concrete example of such combination. Language models like GPT-4 generate program code from natural language specifications, and formal verification tools verify the correctness of that code. This enables new forms of collaboration combining creativity and rigor.

New possibilities are also emerging in **automated theorem proving**. Traditional theorem provers had practical limitations due to vast search spaces, but using language models as guides might enable more efficient proof search. Systems like DeepMind's AlphaGeometry and OpenAI's GPT-f are examples of such attempts.

From an **explainable AI** perspective, logic can find new roles. One of the biggest problems with current large language models is the opacity of their reasoning processes. Using logical structures could make models' reasoning processes clearer.

However, these fusion attempts also face **fundamental limitations**. The biggest problem is the difference in **scale**. Modern language models are trained on trillions of tokens and have hundreds of billions of parameters. In contrast, formal logic systems still only work effectively with relatively small knowledge bases.

**Representation mismatch** is also a serious problem. Converting between language models' distributed representations and logic's symbolic representations inevitably involves information loss. It's difficult to fully capture natural language's subtle meanings in logical form, and conversely, it's not easy to express logical reasoning results in natural language.

The **paradigm difference between learning and reasoning** is another challenge to overcome. Language models use an inductive approach, learning patterns from large amounts of data. In contrast, formal logic uses a deductive approach, deriving theorems from axioms. Effectively combining these two paradigms is neither technically nor theoretically easy.

## Future Prospects: Logic's Rebirth or Final Decline?

Forecasting the future of mathematical logic is closely related to understanding the nature of the ongoing AI revolution. Several scenarios are possible, but let's examine the two main perspectives.

The **optimistic scenario** foresees logic's **rebirth**. From this perspective, current AI success is an opportunity to breathe new life into logic. As the limitations of large language models' reasoning abilities become clearer, demand for more rigorous and reliable reasoning methods will increase.

Especially in **safety-critical systems**, formal verification is essential. In autonomous vehicles, aircraft control systems, and medical AI, "probably correct" levels of reliability aren't sufficient. Mathematically provable correctness is needed, and formal logic is indispensable for this.

The **AI alignment** problem could also give logic new roles. To ensure AI systems align with human values, we must be able to express those values clearly and unambiguously. This is a typical formalization problem and a traditional strength of logic.

**Quantum computing**'s development could also provide new opportunities for logic. Quantum logic is still a developing field, and new formal methods will be needed to ensure the correctness of quantum algorithms.

The **pessimistic scenario** foresees logic's **gradual decline**. From this perspective, current AI success represents the emergence of a new paradigm that bypasses formal logic's fundamental limitations. If human intelligence itself depends more on pattern recognition and intuitive judgment than rigorous logical reasoning, AI will develop in that direction too.

The success of **statistical learning** supports this view. Instead of explicitly describing complex rules, learning implicit patterns from data has been repeatedly confirmed as more effective. This trend is clear in image recognition, natural language processing, and game playing.

The dominance of **probabilistic reasoning** is also noteworthy. The real world is full of uncertainty, and most situations cannot be handled with binary true/false. Methods like Bayesian inference, reinforcement learning, and probabilistic programming are providing more practical solutions.

The **intermediate scenario** foresees logic's **change and adaptation**. From this perspective, mathematical logic will neither disappear nor regain its former glory. Instead, it will evolve into new forms while performing more limited but still important roles.

**Domain-specific specialization** is one form of such adaptation. Instead of universal logic systems covering everything, domain-specific logics will develop. Logic for hardware verification, logic for protocol verification, logic for databases, etc., developing independently.

**Survival as a tool** is also a possible scenario. Logic itself might lose its status as an independent research field but continue to be used as a tool in other fields. Just as calculus isn't an independent research field but is used as a basic tool in all scientific fields.

## Conclusion: Finding New Possibilities Within Limitations

The relationship between mathematical logic and current AI shows complex aspects beyond simple opposition or complementation. Just because formal logic failed to fully capture natural language's complexity doesn't mean it's meaningless. Similarly, just because large language models show remarkable achievements doesn't mean rigorous reasoning is unnecessary.

What **Gödel's incompleteness theorems** taught us was the impossibility of complete formalization. But they also showed that meaningful work is possible even within those limits. Mathematics continued to develop after Gödel's results, and computer science has solved practical problems despite undecidability.

The **true value of formal logic** might not lie in complete automation but in clarity and rigor. Logic's methods remain useful for precisely describing complex problems, making reasoning processes transparent, and systematically finding errors. It's just that their application scope is more limited than we initially dreamed.

The **future relationship between AI and logic** is likely to be complementary rather than competitive. A division of labor is possible where AI handles creativity and pattern recognition while logic handles verification and rigor. We can already see early forms of such collaboration in fields like program synthesis, automated theorem proving, and formal verification.

The answer to whether **mathematical logic is a 'dead discipline'** depends on how we define a discipline's vitality. If we see only innovative discoveries and rapid growth as signs of life, logic is certainly declining. But if we also see providing solid foundations and continuous contribution to other fields as expressions of vitality, logic is still alive.

What's important is having realistic expectations. Mathematical logic cannot be a universal tool capturing all aspects of human reason. But it can still play an irreplaceable role in specific areas requiring rigor. The AI revolution we're currently witnessing might actually highlight the importance of such roles even more.

Ultimately, the future of mathematical logic lies in modest specialization. Instead of ambition to explain everything, clearly recognizing what it can and cannot do, and doing its best within that scope. This might signify the discipline's maturity, or another form of vitality. Just as the limits Gödel showed weren't the end but conditions for a new beginning, the challenges logic currently faces could also become opportunities for change and evolution.

---

**References**

- Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme. *Monatshefte für Mathematik*, 38, 173-198.
- Russell, B., & Whitehead, A. N. (1910-1913). *Principia Mathematica*. Cambridge University Press.
- Turing, A. M. (1936). On computable numbers, with an application to the Entscheidungsproblem. *Proceedings of the London Mathematical Society*, 42(2), 230-265.
- Hofstadter, D. R. (1979). *Gödel, Escher, Bach: An Eternal Golden Braid*. Basic Books.
- Penrose, R. (1989). *The Emperor's New Mind*. Oxford University Press.
- McCarthy, J. (1960). Recursive functions of symbolic expressions and their computation by machine. *Communications of the ACM*, 3(4), 184-195.
- Minsky, M., & Papert, S. (1969). *Perceptrons*. MIT Press.
- Rumelhart, D. E., & McClelland, J. L. (1986). *Parallel Distributed Processing*. MIT Press.
- Vaswani, A., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
- Brown, T., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33.