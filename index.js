const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Horse API is working");
});

app.get("/prices", (req, res) => {
  res.json([
    {
      horse: "Morshdi",
      oldPrice: 6.5,
      newPrice: 4.2,
      movePercent: 35.38,
      signal: "HEAVILY BACKED"
    }
  ]);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});            const horse = outcome.name;
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
