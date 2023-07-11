import React from "react";
import ThemeContext from "../Context/ThemeContext";
function Left() {
  const [theme, changeTheme] = React.useContext(ThemeContext);
  return (
    <div class="container my-4">
      <div class="row mb-2">
        <div class="col-md-6">
          <div
            class={
              theme === "light"
                ? "card flex-md-row mb-4 box-shadow h-md-250"
                : "card flex-md-row mb-4 box-shadow h-md-250 bg-secondary"
            }
            style={{transition:"all 1s"}}
          >
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-danger">World</strong>
              <h3 class="mb-0 ">
                <a
                  class={theme === "light" ? "text-dark " : "text-light"}
                  href="#"
                >
                  Featured post
                </a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p
                class={
                  theme === "light"
                    ? " card-text mb-auto text-dark "
                    : " card-text mb-auto text-light"
                }
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="text-success">
                Continue reading
              </a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{
                width: "200px",
                height: "250px",
              }}
              src="https://source.unsplash.com/250x200/?roads"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div
            class={
              theme === "light"
                ? "card flex-md-row mb-4 box-shadow h-md-250"
                : "card flex-md-row mb-4 box-shadow h-md-250 bg-secondary"
            }
            style={{transition:"all 1s"}}
          >
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">World</strong>
              <h3 class="mb-0 ">
                <a
                  class={theme === "light" ? "text-dark " : "text-light"}
                  href="#"
                >
                  Featured post
                </a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p
                class={
                  theme === "light"
                    ? " card-text mb-auto text-dark "
                    : " card-text mb-auto text-light"
                }
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="text-success">
                Continue reading
              </a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{
                width: "200px",
                height: "250px",
              }}
              src="https://source.unsplash.com/250x200/?autum"
              data-holder-rendered="true"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div
            class={
              theme === "light"
                ? "card flex-md-row mb-4 box-shadow h-md-250"
                : "card flex-md-row mb-4 box-shadow h-md-250 bg-secondary"
            }
            style={{transition:"all 1s"}}
          >
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">World</strong>
              <h3 class="mb-0 ">
                <a
                  class={theme === "light" ? "text-dark " : "text-light"}
                  href="#"
                >
                  Featured post
                </a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p
                class={
                  theme === "light"
                    ? " card-text mb-auto text-dark "
                    : " card-text mb-auto text-light"
                }
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="text-success">
                Continue reading
              </a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{
                width: "200px",
                height: "250px",
              }}
              src="https://source.unsplash.com/250x200/?spring"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div
            class={
              theme === "light"
                ? "card flex-md-row mb-4 box-shadow h-md-250"
                : "card flex-md-row mb-4 box-shadow h-md-250 bg-secondary"
            }
            style={{transition:"all 1s"}}
          >
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-dark">World</strong>
              <h3 class="mb-0 ">
                <a
                  class={theme === "light" ? "text-dark " : "text-light"}
                  href="#"
                >
                  Featured post
                </a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p
                class={
                  theme === "light"
                    ? " card-text mb-auto text-dark "
                    : " card-text mb-auto text-light"
                }
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" className="text-success">
                Continue reading
              </a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{
                width: "200px",
                height: "250px",
              }}
              src="https://source.unsplash.com/250x200/?computer"
              data-holder-rendered="true"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Left;
