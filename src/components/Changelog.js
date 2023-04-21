import React from "react";

// importing StyleSheet
import "../css/changeLog.css";
import "../old/font_face.css";

export default function Changelog() {
  return (
    <div className="changeLogContent">
      <div class="app-sidebar">
        <a href="#/" class="app-sidebar-link active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <a href="#/" class="app-sidebar-link">
          <svg
            class="link-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"></path>
          </svg>
        </a>
        <a href="#/" class="app-sidebar-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </a>
        <a href="#/" class="app-sidebar-link">
          <svg
            class="link-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
          </svg>
        </a>
      </div>

      <div className="changeLogContainer">
        <div className="changeLogHeader">
          <p>Projects</p>
          <p className="time">March 21</p>
        </div>
        <div className="changeLogDetailHeader">
          <div className="changeLogStatus">
            <div className="change-status">
              <span className="change-number">45</span>
              <span className="change-type">in progress</span>
            </div>

            <div className="change-status">
              <div className="change-number">65</div>
              <div className="change-type">in progress</div>
            </div>

            <div className="change-status">
              <div className="change-number">65</div>
              <div className="change-type">in progress</div>
            </div>
          </div>
          <div className="view-actions">
            <button class="view-btn list-view" title="List View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-list"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
            <button class="view-btn grid-view active" title="Grid View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-grid"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
          </div>
        </div>

        <div className="changeLogBoxes jsGridView">
          <div className="changeLogBox-wrapper">
            <div className="changeLog-box">
              <div className="changeLog-box-header">
                <span>December 10, 2022</span>

                <div class="more-wrapper">
                  <button class="changeLog-btn-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="changeLog-box-content-header">
                <p class="box-content-header">Web Designing</p>
                <p class="box-content-subheader">Prototyping</p>
              </div>

              <div class="box-progress-wrapper">
                <p class="box-progress-header">Progress</p>
                <div class="box-progress-bar">
                  <span
                    class="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  ></span>
                </div>
                <p class="box-progress-percentage">60%</p>
              </div>
              <div class="changeLog-box-footer">
                <div class="participants">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    alt="Human Tester"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                    alt="Human Tester"
                  />
                  <button class="add-participant" style={{ color: "#ff942e" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <div class="days-left" style={{ color: "#ff942e" }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
          <div className="changeLogBox-wrapper">
            <div className="changeLog-box">
              <div className="changeLog-box-header">
                <span>December 10, 2022</span>

                <div class="more-wrapper">
                  <button class="changeLog-btn-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="changeLog-box-content-header">
                <p class="box-content-header">Web Designing</p>
                <p class="box-content-subheader">Prototyping</p>
              </div>

              <div class="box-progress-wrapper">
                <p class="box-progress-header">Progress</p>
                <div class="box-progress-bar">
                  <span
                    class="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  ></span>
                </div>
                <p class="box-progress-percentage">60%</p>
              </div>
              <div class="changeLog-box-footer">
                <div class="participants">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    alt="Human Tester"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                    alt="Human Tester"
                  />
                  <button class="add-participant" style={{ color: "#ff942e" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <div class="days-left" style={{ color: "#ff942e" }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
          <div className="changeLogBox-wrapper">
            <div className="changeLog-box">
              <div className="changeLog-box-header">
                <span>December 10, 2022</span>

                <div class="more-wrapper">
                  <button class="changeLog-btn-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="changeLog-box-content-header">
                <p class="box-content-header">Web Designing</p>
                <p class="box-content-subheader">Prototyping</p>
              </div>

              <div class="box-progress-wrapper">
                <p class="box-progress-header">Progress</p>
                <div class="box-progress-bar">
                  <span
                    class="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  ></span>
                </div>
                <p class="box-progress-percentage">60%</p>
              </div>
              <div class="changeLog-box-footer">
                <div class="participants">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    alt="Human Tester"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                    alt="Human Tester"
                  />
                  <button class="add-participant" style={{ color: "#ff942e" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <div class="days-left" style={{ color: "#ff942e" }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
          <div className="changeLogBox-wrapper">
            <div className="changeLog-box">
              <div className="changeLog-box-header">
                <span>December 10, 2022</span>

                <div class="more-wrapper">
                  <button class="changeLog-btn-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="changeLog-box-content-header">
                <p class="box-content-header">Web Designing</p>
                <p class="box-content-subheader">Prototyping</p>
              </div>

              <div class="box-progress-wrapper">
                <p class="box-progress-header">Progress</p>
                <div class="box-progress-bar">
                  <span
                    class="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  ></span>
                </div>
                <p class="box-progress-percentage">60%</p>
              </div>
              <div class="changeLog-box-footer">
                <div class="participants">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    alt="Human Tester"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                    alt="Human Tester"
                  />
                  <button class="Human Tester" style={{ color: "#ff942e" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <div class="days-left" style={{ color: "#ff942e" }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
          <div className="changeLogBox-wrapper">
            <div className="changeLog-box">
              <div className="changeLog-box-header">
                <span>December 10, 2022</span>

                <div class="more-wrapper">
                  <button class="changeLog-btn-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="changeLog-box-content-header">
                <p class="box-content-header">Web Designing</p>
                <p class="box-content-subheader">Prototyping</p>
              </div>

              <div class="box-progress-wrapper">
                <p class="box-progress-header">Progress</p>
                <div class="box-progress-bar">
                  <span
                    class="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  ></span>
                </div>
                <p class="box-progress-percentage">60%</p>
              </div>
              <div class="changeLog-box-footer">
                <div class="participants">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    alt="Human Tester"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                    alt="Human Tester"
                  />
                  <button class="Human Tester" style={{ color: "#ff942e" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <div class="days-left" style={{ color: "#ff942e" }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="messages-section">
        <button class="messages-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </button>
        <div class="projects-section-header">
          <p>Client Messages</p>
        </div>
        <div class="messages">
          <div class="message-box">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
              alt="Human Tester"
            />
            <div class="message-content">
              <div class="message-header">
                <div class="name">Stephanie</div>
                <div class="star-checkbox">
                  <input type="checkbox" id="star-1" />
                  <label for="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </label>
                  {/* </input> */}
                </div>
              </div>
              <p class="message-line">
                I got your first assignment. It was quite good. 🥳 We can
                continue with the next assignment.
              </p>
              <p class="message-line time">Dec, 12</p>
            </div>
          </div>
          <div class="message-box">
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
              alt="Human profile"
            />
            <div class="message-content">
              <div class="message-header">
                <div class="name">Mark</div>
                <div class="star-checkbox">
                  <input type="checkbox" id="star-2" />
                  <label for="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </label>
                  {/* </input> */}
                </div>
              </div>
              <p class="message-line">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p class="message-line time">Dec, 12</p>
            </div>
          </div>
          <div class="message-box">
            <img
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
              alt="Human profile"
            />
            <div class="message-content">
              <div class="message-header">
                <div class="name">David</div>
                <div class="star-checkbox">
                  <input type="checkbox" id="star-3" />
                  <label for="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </label>
                  {/* </input> */}
                </div>
              </div>
              <p class="message-line">
                Awesome! 🤩 I like it. We can schedule a meeting for the next
                one.
              </p>
              <p class="message-line time">Dec, 12</p>
            </div>
          </div>
          <div class="message-box">
            <img
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
              alt="Human profile"
            />
            <div class="message-content">
              <div class="message-header">
                <div class="name">Jessica</div>
                <div class="star-checkbox">
                  <input type="checkbox" id="star-4" />
                  <label for="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </label>
                  {/* </input> */}
                </div>
              </div>
              <p class="message-line">
                I am really impressed! Can't wait to see the final result.
              </p>
              <p class="message-line time">Dec, 11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
