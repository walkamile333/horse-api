const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.ODDS_API_KEY;

let oldPrices = {};

app.get("/", (req, res) => {
  res.send("Horse odds tracker running");
});

app.get("/prices", async (req, res) => {
  try {
    const url =
      `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${API_KEY}&regions=uk&markets=h2h&oddsFormat=decimal`;

    const response = await fetch(url);
    const data = await response.json();

    if (!Array.isArray(data)) {
      return res.status(500).json({
        error: "Odds API did not return a race list",
        details: data
      });
    }

    const tracked = [];

    data.forEach(event => {
      event.bookmakers?.forEach(bookmaker => {
        bookmaker.markets?.forEach(market => {
          market.outcomes?.forEach(outcome => {
            const horse = outcome.name;
            const newPrice = outcome.price;

            const oldPrice = oldPrices[horse];
            oldPrices[horse] = newPrice;

            let signal = "NEW";
            let movePercent = 0;

            if (oldPrice) {
              movePercent = ((oldPrice - newPrice) / oldPrice) * 100;

              signal = "STABLE";

              if (movePercent >= 20) signal = "HEAVILY BACKED 🔥";
              else if (movePercent >= 10) signal = "STEAMING 📈";
              else if (movePercent <= -10) signal = "DRIFTING 📉";
            }

            tracked.push({
              horse,
              oldPrice,
              newPrice,
              movePercent: Number(movePercent.toFixed(2)),
              signal,
              bookmaker: bookmaker.title,
              event: event.home_team + " v " + event.away_team
            });
          });
        });
      });
    });

    res.json(tracked);

  } catch (error) {
    res.status(500).json({
      error: "Could not load odds",
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Horse tracker running");
});
            const oldPrice = oldPrices[horse];
            oldPrices[horse] = newPrice;

            let signal = "STABLE";
            let movePercent = 0;

            if (oldPrice) {

              movePercent =
                ((oldPrice - newPrice) / oldPrice) * 100;

              if (movePercent >= 20) {
                signal = "HEAVILY BACKED 🔥";
              }
              else if (movePercent >= 10) {
                signal = "STEAMING 📈";
              }
              else if (movePercent <= -10) {
                signal = "DRIFTING 📉";
              }
            }

            tracked.push({
              horse,
              oldPrice,
              newPrice,
              movePercent: Number(movePercent.toFixed(2)),
              signal
            });

          });

        });

      });

    });

    res.json(tracked);

  } catch (error) {

    res.status(500).json({
      error: "Could not load odds",
      details: error.message
    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Horse tracker running");
});
