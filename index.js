const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/prices") {
    res.end(JSON.stringify([
      {
        horse: "Morshdi",
        oldPrice: 6.5,
        newPrice: 4.2,
        movePercent: 35.38,
        signal: "HEAVILY BACKED"
      },
      {
        horse: "Talk of New York",
        oldPrice: 8.0,
        newPrice: 7.4,
        movePercent: 7.5,
        signal: "STABLE"
      }
    ]));
    return;
  }

  res.end(JSON.stringify({
    message: "Horse API is working",
    endpoint: "/prices"
  }));
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log("Horse API running on port " + PORT);
});
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
