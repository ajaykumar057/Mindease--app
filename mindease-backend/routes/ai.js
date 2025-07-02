const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL = "llama3-70b-8192";

// 1. Journal Prompt
router.get("/journal-prompt", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a mental wellness coach. Give one short, emotionally reflective journaling prompt in under 25 words.",
          },
          {
            role: "user",
            content: "Generate a journaling prompt",
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const prompt = response.data.choices[0].message.content;
    res.json({ prompt });
  } catch (error) {
    console.error("🔥 /journal-prompt error:", error.message);
    res.status(400).json({ error: "Failed to generate journaling prompt." });
  }
});

// 2. CBT Reframe
router.post("/reframe", async (req, res) => {
  const { thought } = req.body;
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a compassionate CBT therapist. Reframe the user’s negative thought in a rational, helpful and healthy way.",
          },
          {
            role: "user",
            content: `Reframe this thought: "${thought}"`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reframe = response.data.choices[0].message.content;
    res.json({ reframe });
  } catch (error) {
    console.error("🔥 /reframe error:", error.message);
    res.status(400).json({ error: "Failed to reframe thought." });
  }
});

// 3. Daily Affirmation
router.get("/affirmation", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a mindfulness expert. Provide one calming and positive daily affirmation in under 20 words.",
          },
          {
            role: "user",
            content: "Give me an affirmation",
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const affirmation = response.data.choices[0].message.content;
    res.json({ affirmation });
  } catch (error) {
    console.error("🔥 /affirmation error:", error.message);
    res.status(400).json({ error: "Failed to generate affirmation." });
  }
});

module.exports = router;
