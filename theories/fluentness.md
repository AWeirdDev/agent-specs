# Fluentness
No one has really used this word for AI, but here I am.
Fluentness refers to the overall experience of connectivity between contexts, sometimes one might describe it as "the flow."

❌ **NOT fluent**:
> **User**: i just LOVE the movie oppenheimer
> 
> **Bot**: The movie Oppenheimer is a 2023 epic biographical drama film written, produced and directed by Christopher Nolan. It follows the life of J. Robert Oppenheimer [...]

Taking a look at the messages sent, the bot **knows** what the user is talking about, but it fails to connect it with what the **context** is. The user only states what they **like**, not general questions like when the movie is released, who directed it, or anything similar. In fact, it's a general practice for LLMs to do such thing, but the non-contextualized knowledge should be put further down the message with texts or knowledge-graph like component (like the ones you see on the side panel on most search engined), or simply just ask the user whether they'd like to know more while still being aware of their love about the movie.
A fluent message would be like:

✅ **Fluent**:
> **User**: i just LOVE the movie oppenheimer
> 
> **Bot**: Oppenheimer really left an impact, huh? Nolan has a way of doing that. What stood out to you the most?

This is more connected. The emotions the user are more considered, and not just scattered keywords.
Another example of contextual connection is not only split by words, but also time:

❌ **NOT fluent**:
> *2 days later*
> 
> **User**: what's that movie i mentioned a few days ago???
> 
> **Bot**: I'm sorry, but I cannot recall the movie you've mentioned days ago as I [...]

This is a more general example of bad memory handling. But here's another example:

❌ **NOT fluent**:
> **Bot**: The movie you mentioned two days ago is called "Oppenheimer," directed by Christopher Nolan. You mentioned how much you love the movie and would like to know more.

You can probably tell that this response is dull and boring. It's not that they've understood what you mean if it could analyze it literally, but rather **what you mean internally**.

✅ **Fluent**:
> **User**: what’s that movie i mentioned a few days ago???
> 
> **Bot**: You mentioned loving Oppenheimer! Still thinking about it? Happy to dive deeper or chat about something related.

This isn't limited to solely emotions, but also real-life scenarios, maps, weather, and so on. But does it also mean that we should be remembering every type of information available to maintain the "perfect" fluentness? Well, not quite. It's best to only remember things that play an important role to a decision or scenario, and most data can be simply discarded.