---
title: "AI Basics"
slug: "/basci_ai_topics"
---

AI Basics
=========

Adverserial Searching
---------------------

Alpha Beta search is a heuristic search algorithm used in game trees. It
is a variant of the minimax algorithm. The algorithm alternates between
two modes, called max and min. In the max mode, it tries to find the
move that gives the maximum score for the player. In the min mode, it
tries to find the move that gives the minimum score for the player’s
opponent.

Cost of searching
-----------------

Uninformed Search Search with no information

Very time consuming

More complex in both time and space

DFS, BFS, etc

Explore every possible route from the starting node

Con: Very time and space complex

Pro: Find best path is guaranteed

EX: Traveling salesman problem

Informed Search
---------------

Search with information

Less time consuming & complex

Uses knowledge and technique to find solutions

A\* algorithm, best first search, shortest path algorithms

Heuristic searches
------------------

UNINFORMED (blind) SEARCH - continued

Examples (BFS, DFS, UC) Algorithms (BFS, UC (best-1st), DFS, DL, ID)
Uniform Cost Search - Example problem Bidirectional Search - General
principles INFORMED SEARCH - Best-First

Greedy best-first

Best first search

Always choose the node with the LEAST heuristic value

Uniform Cost Search
-------------------

Variant of Dijkstra’s algorithm

Above is our given search space, in this search space we have 3 goal
states, g1, g2, and g3

The agent wants to move into any one of the three goal states

We want to move from S - &gt; one of the goal states

We want to perform this movement with the minimal path costs

At every step of the algorithm we consider whether the state we are
currently in is the goal; if it is not then we expand it
