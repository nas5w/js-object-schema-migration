# JavaScript Object Schema Migration

This repository accompanies the blog post, [An Approach to JavaScript Object Schema Migration](https://typeofnan.dev/an-approach-to-js-object-schema-migration/).

## Introduction

Recently, I found myself in a position where an application was heavily reliant on a state object. This is fairly typical for single page applications (SPAs) and can pose a challenge when your state object’s schema changes significantly and you have users that have data saved under an old schema.

In this post, I’ll explore a proof-of-concept solution I put together to explore the topic. While I’m sure there are schema migration tools in existence already, I figured this would be an interesting and educational exploration of the topic!

## Exploring the Content of this Repository

This repository is broken up into three main files:

- `migrate.js`: Contains the functions required to perform migrations
- `migrations.js`: Contains the migrations detailing how different versions of schema are incremented or decremented
- `index.js`: Provides example schemas and runs migrations using the other two files.
