(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'md5-press.myshopify.com',
      apiKey: '4ebea0164bd2b3ebe8b789871d73e3ab',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [8778657803],
        node: document.getElementById('product-component-d7ff96df66d'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "horizontal",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "description": true,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "Order Now"
            },
            "styles": {
              "product": {
                "text-align": "left",
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      ui.createComponent('product', {
        id: [8835395787],
        node: document.getElementById('product-component-087f7a2ff0d'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "buttonDestination": "checkout",
            "layout": "horizontal",
            "variantId": "all",
            "width": "100%",
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "description": true,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "Order Now"
            },
            "styles": {
              "product": {
                "text-align": "left",
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15px"
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                ":hover": {
                  "background-color": "#6ca44e"
                },
                ":focus": {
                  "background-color": "#6ca44e"
                }
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    })
  }
})();
