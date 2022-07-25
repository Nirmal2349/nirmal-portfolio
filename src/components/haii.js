// star fall background
// {
//           background: {
//             color: {
//               value: "#020f29",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: false,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 50,
//               },
//               repulse: {
//                 distance: 100,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 100,
//               enable: false,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "top",
//               enable: true,
//               random: false,
//               speed: 2,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 100,
//             },
//             opacity: {
//               value: 0.4,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 4 },
//             },
//           },
//           detectRetina: true,
//         }


{/* <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    fullScreen: {
      enable: true,
    },
    fpsLimit: 120,
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 200,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
        animation: {
          enable: false,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 3,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
      },
      links: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        angle: {
          value: 10,
          offset: 0,
        },
        enable: true,
        speed: 5,
        direction: "right",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      zIndex: {
        value: 5,
        opacityRate: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
          groups: ["z5000", "z7500", "z2500", "z1000"],
        },
        remove: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    emitters: {
      position: {
        y: 55,
        x: -5,
      },
      rate: {
        delay: 7,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        shape: {
          type: "images",
          options: {},
        },
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: "none",
            right: "destroy",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  }}
/>; */}



<div className="exp">
      <h5>Skills</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h4>Frontend Development</h4>
          <div className="experience__content">
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> HTML
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> CSS
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> JS
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> React js
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> Bootsrap
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> MUI
              </h5>
            </div>
          </div>
        </div>
        <div className="experience__backend">
          <h4>Backend Development</h4>
          <div className="experience__content">
            <div className="experience__details">
              {/* <div className="experience__details_icons"> */}
              <h5>
                <BsPatchCheckFill /> Node js
              </h5>
              {/* </div> */}
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> Express js
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> SQL
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> MongoDB
              </h5>
            </div>
            <div className="experience__details">
              <h5>
                <BsPatchCheckFill /> AWS
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>