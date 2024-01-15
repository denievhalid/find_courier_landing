import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <svg
        width="218"
        height="40"
        viewBox="0 0 218 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M202.729 12.336H210.209C211.426 12.336 212.489 12.5487 213.399 12.974C214.323 13.3993 215.034 14.0007 215.533 14.778C216.046 15.5553 216.303 16.4573 216.303 17.484C216.303 18.32 216.112 19.0827 215.731 19.772C215.364 20.4467 214.851 20.9967 214.191 21.422C213.545 21.8473 212.805 22.1113 211.969 22.214L211.793 22.236L216.809 28H212.629L208.141 22.5H206.381V28H202.729V12.336ZM209.725 19.926C210.619 19.926 211.331 19.7133 211.859 19.288C212.401 18.848 212.673 18.254 212.673 17.506C212.673 16.7727 212.401 16.1933 211.859 15.768C211.316 15.328 210.605 15.108 209.725 15.108H206.381V19.926H209.725Z"
          fill="#282141"
        />
        <path
          d="M188.549 12.336H200.099V15.284H192.113V18.738H199.505V21.312H192.113V25.052H200.319V28H188.549V12.336Z"
          fill="#282141"
        />
        <path
          d="M183.984 15.174C183.412 15.174 182.943 14.998 182.576 14.646C182.21 14.2793 182.026 13.8173 182.026 13.26C182.026 12.7027 182.21 12.248 182.576 11.896C182.943 11.5293 183.412 11.346 183.984 11.346C184.556 11.346 185.026 11.5293 185.392 11.896C185.759 12.248 185.942 12.7027 185.942 13.26C185.942 13.8173 185.759 14.2793 185.392 14.646C185.026 14.998 184.556 15.174 183.984 15.174ZM182.356 16.736H185.612V28H182.356V16.736Z"
          fill="#282141"
        />
        <path
          d="M166.506 12.336H173.986C175.203 12.336 176.267 12.5487 177.176 12.974C178.1 13.3993 178.811 14.0007 179.31 14.778C179.823 15.5553 180.08 16.4573 180.08 17.484C180.08 18.32 179.889 19.0827 179.508 19.772C179.141 20.4467 178.628 20.9967 177.968 21.422C177.323 21.8473 176.582 22.1113 175.746 22.214L175.57 22.236L180.586 28H176.406L171.918 22.5H170.158V28H166.506V12.336ZM173.502 19.926C174.397 19.926 175.108 19.7133 175.636 19.288C176.179 18.848 176.45 18.254 176.45 17.506C176.45 16.7727 176.179 16.1933 175.636 15.768C175.093 15.328 174.382 15.108 173.502 15.108H170.158V19.926H173.502Z"
          fill="#282141"
        />
        <path
          d="M156.441 28.418C155.077 28.418 153.86 28.1393 152.789 27.582C151.733 27.0247 150.905 26.24 150.303 25.228C149.717 24.216 149.423 23.05 149.423 21.73V12.336H153.075V21.642C153.075 22.7567 153.383 23.6587 153.999 24.348C154.63 25.0373 155.444 25.382 156.441 25.382C157.424 25.382 158.223 25.0373 158.839 24.348C159.47 23.644 159.785 22.742 159.785 21.642V12.336H163.437V21.73C163.437 23.05 163.137 24.216 162.535 25.228C161.949 26.24 161.127 27.0247 160.071 27.582C159.015 28.1393 157.805 28.418 156.441 28.418Z"
          fill="#282141"
        />
        <path
          d="M138.439 28.418C136.738 28.418 135.227 28.0807 133.907 27.406C132.602 26.7167 131.582 25.7487 130.849 24.502C130.13 23.2554 129.771 21.8107 129.771 20.168C129.771 18.54 130.138 17.1027 130.871 15.856C131.604 14.6094 132.624 13.6414 133.929 12.952C135.249 12.2627 136.752 11.918 138.439 11.918C140.126 11.918 141.622 12.2627 142.927 12.952C144.247 13.6414 145.274 14.6094 146.007 15.856C146.74 17.1027 147.107 18.54 147.107 20.168C147.107 21.8107 146.74 23.2554 146.007 24.502C145.288 25.7487 144.269 26.7167 142.949 27.406C141.644 28.0807 140.14 28.418 138.439 28.418ZM138.439 25.382C139.407 25.382 140.272 25.162 141.035 24.722C141.798 24.282 142.392 23.666 142.817 22.874C143.242 22.082 143.455 21.18 143.455 20.168C143.455 19.156 143.242 18.2614 142.817 17.484C142.392 16.692 141.798 16.076 141.035 15.636C140.272 15.196 139.407 14.976 138.439 14.976C137.471 14.976 136.606 15.196 135.843 15.636C135.08 16.076 134.486 16.692 134.061 17.484C133.636 18.2614 133.423 19.156 133.423 20.168C133.423 21.18 133.636 22.082 134.061 22.874C134.486 23.666 135.08 24.282 135.843 24.722C136.606 25.162 137.471 25.382 138.439 25.382Z"
          fill="#282141"
        />
        <path
          d="M120.342 28.418C118.744 28.418 117.306 28.0734 116.03 27.384C114.769 26.68 113.779 25.7047 113.06 24.458C112.342 23.1967 111.982 21.7667 111.982 20.168C111.982 18.5694 112.342 17.1467 113.06 15.9C113.779 14.6387 114.769 13.6634 116.03 12.974C117.306 12.27 118.744 11.918 120.342 11.918C121.633 11.918 122.828 12.1747 123.928 12.688C125.043 13.1867 125.967 13.8907 126.7 14.8C127.434 15.7094 127.896 16.7434 128.086 17.902L124.676 18.298C124.456 17.33 123.943 16.538 123.136 15.922C122.344 15.2914 121.435 14.976 120.408 14.976C119.484 14.976 118.656 15.196 117.922 15.636C117.204 16.076 116.639 16.692 116.228 17.484C115.832 18.2614 115.634 19.156 115.634 20.168C115.634 21.18 115.832 22.082 116.228 22.874C116.639 23.666 117.204 24.282 117.922 24.722C118.656 25.162 119.484 25.382 120.408 25.382C121.406 25.382 122.3 25.0814 123.092 24.48C123.899 23.864 124.427 23.0794 124.676 22.126L128.108 22.588C127.932 23.7174 127.478 24.7294 126.744 25.624C126.026 26.504 125.109 27.1934 123.994 27.692C122.88 28.176 121.662 28.418 120.342 28.418Z"
          fill="#282141"
        />
        <path
          d="M90 12.336H95.874C97.6634 12.336 99.24 12.666 100.604 13.326C101.968 13.9713 103.024 14.888 103.772 16.076C104.52 17.2493 104.894 18.6133 104.894 20.168C104.894 21.7227 104.52 23.094 103.772 24.282C103.024 25.4553 101.968 26.372 100.604 27.032C99.24 27.6773 97.6634 28 95.874 28H90V12.336ZM95.874 25.14C96.9447 25.14 97.8834 24.942 98.69 24.546C99.5114 24.1353 100.142 23.556 100.582 22.808C101.037 22.06 101.264 21.18 101.264 20.168C101.264 19.1707 101.037 18.298 100.582 17.55C100.142 16.802 99.5114 16.2227 98.69 15.812C97.8834 15.4013 96.9447 15.196 95.874 15.196H93.564V25.14H95.874Z"
          fill="#282141"
        />
        <path
          d="M72.9629 12.336H77.1869L83.1269 23.27H83.3469V12.336H86.8229V28H82.5989L76.6589 17.088H76.4389V28H72.9629V12.336Z"
          fill="#282141"
        />
        <path
          d="M68.3983 15.174C67.8263 15.174 67.3569 14.998 66.9903 14.646C66.6236 14.2793 66.4403 13.8173 66.4403 13.26C66.4403 12.7027 66.6236 12.248 66.9903 11.896C67.3569 11.5293 67.8263 11.346 68.3983 11.346C68.9703 11.346 69.4396 11.5293 69.8063 11.896C70.1729 12.248 70.3563 12.7027 70.3563 13.26C70.3563 13.8173 70.1729 14.2793 69.8063 14.646C69.4396 14.998 68.9703 15.174 68.3983 15.174ZM66.7703 16.736H70.0263V28H66.7703V16.736Z"
          fill="#282141"
        />
        <path
          d="M53.584 12.336H64.804V15.46H57.258V18.914H63.858V21.774H57.258V28H53.584V12.336Z"
          fill="#282141"
        />
        <path
          d="M21.5401 12.1322C-8.83039 12.9096 0.846866 6.6667 21.5401 6.66669C34.1298 6.66668 53.2672 10.9284 15.8962 17.7277C11.3921 18.5472 7.16164 20.7894 21.0181 20.7894C34.8746 20.7894 21.9946 24.8067 18.2379 25.8433C14.4813 26.8799 13.113 28.5285 18.4374 28.5285C23.7617 28.5285 25.2138 28.5285 16.8642 35.5556"
          stroke="#364FEC"
          strokeWidth="3.33333"
        />
      </svg>
    </Link>
  );
};

export default Logo;
