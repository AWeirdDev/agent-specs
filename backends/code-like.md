# Code-like
Agents that think in code.

## Introduction
Some agents like [🤗 smolagents](https://github.com/huggingface/smolagents) can think in code. They use tools as if they're writing code, which is native and straight-forward. Instead of writing full-length (and token cost-heavy) JSON structures, they write Python, which is one of the most trained-on programming languages for LLMs. We can define the schema without wasting too many tokens, like so:

```python
# Checks the weather tomorrow
def weather(
    location: str,  # The location
    *,
    unit: "imperial" | "metric"  # The unit
) -> {
    "description": "cloudy",  # string
    "high": 20,  # int, highest temperature
    "low": 16  # int, lowest temperature
}
```

If you're an experienced Python developer, you'll notice that this isn't necessarily the "correct" way to write Python, and **neither do we have to**. The LLM gets the idea and transpiles it into something like: *"I need the location and the unit. This function (tool) returns a dictionary I could index into, with properties like the description of the weather and the high/low temperature."*

Take this scenario as an example:

> **☹️ User**: Will there be heavy rain tomorrow?
> 
> **🤖 AI**: I can help you check the weather for tomorrow. Could you tell me where the location is?
> 
> **😕 User**: Taipei.
> 
> **🤖 AI**: I'll check the weather in Taipei for you.
> ````python
> ```run
> # Since Taiwan uses "metric" as the unit, I'll pass the unit as "metric."
> result = weather("Taipei", unit="metric")
> result["description"], result["high"], result["low"]
> ```
> ````
> 
> **⛰️ Environment**:
> ```python
> ("sunny all-day", 30, 26)
> ```
> 
> **🤖 AI**: I've checked the weather for tomorrow, and it will be **sunny** for a full day in Taipei! The highest temperature would be 30°C and the lowest would be 26°C, an umbrella-free day!

A few things to note from the above:
1. The agent has to **explicitly** explain what they're doing for each step.
2. The agent uses the `run` block instead of `python` to mark clear differences between code and tools.
3. The agent should be able to **connect results** (such as passing values from previous tool call results), either **coherently** (in one code block) or **multi-shot** (multiple messages/code blocks to get a few tasks done).

This ensures **maximum fluentness** and gets the flow going without losing context.

## Prompting guide
A few things to note to prooooooompt the right way:

1. **Choose the language.** Personally, I suggest Python because it's the best one to get around with. At least for LLMs.

2. **Define the schema.** For instance, you could ask the LLM to use a different kind of code block type like `run`, which indicates running tools. To make it feel even more Python Notebook or REPL-like, you can allow it to:
    - Write actual code with Pythonic syntax. Such as indexing, variable assigning and more.
    - Leave the last expression as the return value (as text).

3. **Make it think**. Either in-code with comments or outside of code with wordings like "I will... by...," followed by the steps it should follow.

4. **Make it stop**. This is crucial. Most LLMs just don't know when to stop and generate a fantasy of their own (which is fake data that isn't returned by the environment). To stop this, you can either define a different schema that's compatible with the commonly-used `stop` argument which defines the stopping token, stop it programatically with checks on your own, or simply be a god at prompting and tell it to stop whenever it uses this block. (Trust me, it's especially difficult. I've tried.)

5. **Make it run**. Create your own code tokenization utilities and make it interact with the environment. If you're using Python, that's good news: there's an `ast` module built-in for abstract syntax trees!

6. **Make it go again**. Make it autonomous or anything, just get the flow going!

So that's basically how you make a code-like agent. Pretty cool, right?
