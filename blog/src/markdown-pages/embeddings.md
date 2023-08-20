---
title: "Embeddings"
slug: "/embeddings"
---


Embeddings
==========

In the context of large language models, embeddings are used to
represent words or tokens in a dense vector space. They are a critical
component of most modern language models, including Transformer-based
models like GPT-4, BERT, and others.

Word embeddings are trained to capture semantic meaning based on the
context in which words appear. They translate the input text into a
sequence of vectors which can then be used as input for further
processing layers (like Transformer layers).

<figure>
<img src="embeddings.png" style="width:50.0%" alt="" /><figcaption>Embeddings</figcaption>
</figure>

Core concepts of embeddings are as follows

1.  **Token Embeddings**: In a language model, a token typically
    corresponds to a word or a subword. Each token in the model’s
    vocabulary has an associated embedding, which is a vector of
    floating-point numbers. When the model is given an input sequence of
    tokens, it looks up the embedding for each token and uses these
    embeddings as the inputs to the rest of the model.

2.  **Positional Embeddings**: Transformer-based models like GPT and
    BERT don’t inherently understand the order of tokens in a sequence,
    which is critical in language as the order of words in a sentence
    carries important information. To overcome this, positional
    embeddings are used, which are added to the token embeddings to
    provide information about the position of each token in the
    sequence.

3.  **Segment Embeddings**: Models like BERT use an additional type of
    embedding called segment embeddings to differentiate between
    different sentences or segments in the same input.

The resulting embeddings capture rich semantic information. For example,
words with similar meanings will have embeddings that are close together
in the vector space. Additionally, more complex semantic relationships
can also be represented.

For example, the famous example from word2vec paper: if we take the
vector for “King”, subtract the vector for “Man”, and add the vector for
“Woman”, the result is close to the vector for “Queen”. This suggests
that the model has learned to represent the concept of gender and
royalty, despite having no explicit knowledge of these concepts.

It’s important to note that these embeddings are not manually
engineered. They are learned by the model as part of the training
process, which involves adjusting the embeddings to improve the model’s
performance on some task, such as predicting the next word in a sentence
(for GPT models) or predicting a masked word in a sentence (for BERT
models).
