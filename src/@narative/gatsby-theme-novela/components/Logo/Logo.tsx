import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="81"
        height="42"
        viewBox="0 0 81 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g clipPath="url(#clip0)">
          <path d="M3.08461 20.857C9.90635 17.2978 17.7958 9.34901 24.2617 8.45922C26.4565 9.70493 23.6685 17.4165 22.7787 19.374C19.9907 25.9585 15.2451 32.4243 9.49111 37.2885C6.58446 39.6612 4.62692 41.2036 1.60162 40.0765C1.18639 39.9578 0.711833 40.4324 1.00843 40.7883C7.83017 44.3475 20.1686 27.0855 23.5498 19.4926C24.7955 16.6453 26.1006 12.0777 25.8633 10.0608C25.3887 5.13733 19.3381 9.23037 15.5417 11.7811C11.33 14.6284 7.41493 17.8317 2.90665 20.2045C2.55074 20.5011 2.61006 20.9756 3.08461 20.857ZM27.3699 21.0349C25.353 21.2722 21.2007 24.4162 21.8532 26.5517C22.2684 27.738 23.7514 27.8567 24.7598 28.3906C22.8616 30.8227 20.3109 34.0852 20.0736 35.9241C20.0736 36.1021 20.0736 36.2207 20.2516 36.28C22.4464 36.8732 27.1326 30.7633 26.4801 29.1024C26.3615 28.6872 26.1242 28.3906 25.8276 28.1533C28.3783 24.5348 31.3443 20.1452 34.073 15.6962C33.8357 16.1114 33.6578 16.586 33.4798 17.0012C31.5223 21.7468 29.6834 26.6703 28.9715 31.3565C28.9715 31.6531 28.9715 31.7124 29.2681 31.7718C33.0646 30.9413 35.1407 23.7636 39.1745 21.8654C40.1829 25.0687 34.9628 34.6784 41.0134 33.2547C41.6659 33.0768 41.6066 32.4836 41.0727 32.4836C40.6575 32.5429 40.1829 32.7802 39.7677 32.7802C37.6915 32.7209 40.1236 24.0602 40.3015 22.7552C40.3609 22.2807 40.0049 20.679 39.3524 20.9756C36.0899 22.5772 30.9291 30.704 29.802 30.882C30.5731 26.3144 32.4714 21.5688 34.3696 16.9419C35.0221 15.3403 35.7339 13.3827 36.4458 11.3659C38.4033 7.74739 40.0049 4.36618 40.6575 1.63749C40.6575 1.57816 40.7168 1.45953 40.7761 1.40021C41.0727 0.866334 40.7168 0.569737 40.3015 0.925652C40.3015 0.984971 40.2422 0.984971 40.2422 1.04429L39.9456 1.34089C39.9456 1.51885 39.827 1.69681 39.7677 1.87476C38.344 4.84073 36.9796 8.22195 35.6746 11.4845C32.8866 16.8233 29.3274 22.3993 26.6581 26.0178C26.3615 26.4923 25.8276 27.0262 25.353 27.738C24.4632 27.2042 23.3362 26.9076 22.6837 26.1364C23.0989 24.0602 25.709 21.9841 27.3106 21.8061C27.9038 21.6281 27.9038 21.0349 27.3699 21.0349ZM25.709 29.4583C26.0649 30.882 22.6837 34.975 20.9041 35.5682C21.2007 34.3225 22.4464 32.7209 23.3955 31.5345C23.2769 31.6531 23.2175 31.7718 23.2769 31.7124L25.353 28.8651C25.531 29.0431 25.6496 29.221 25.709 29.4583ZM43.6058 24.4162C42.9533 27.1448 42.5381 28.2719 42.4787 30.9413C42.4787 31.1786 42.716 31.2379 42.894 31.1786C45.86 29.5176 47.4023 24.8907 50.3682 23.9416C51.0801 24.8314 49.775 26.4923 51.258 26.9076C52.3258 27.1448 53.3935 25.1873 54.3426 24.8907C55.5883 26.0771 53.8681 32.3056 58.4357 28.5685C58.9102 28.2126 58.673 27.738 58.1391 27.9753C57.4866 28.5092 56.7154 28.9837 55.9443 28.6872C55.2324 27.2635 55.9443 25.2466 54.7579 24.0602H54.5206C53.3342 24.4162 52.6817 25.5432 51.5546 26.1364C51.1987 25.9585 52.0885 20.2045 48.1141 24.7721C44.7329 28.4499 44.0211 29.3397 43.2499 30.2295C43.2499 27.916 43.7838 26.9076 44.3177 24.5348C44.4363 24.0009 43.9024 23.823 43.6058 24.4162ZM66.9415 7.39147C64.3908 12.137 61.6028 19.9079 60.0012 24.8907C59.1114 27.5601 57.6284 30.7633 58.3995 33.2547C58.5775 33.3734 58.6961 33.4327 58.8741 33.3734C61.3062 32.4243 62.7892 30.704 64.1535 28.6278C65.2806 26.9669 66.3483 25.3059 67.4161 23.645C67.2974 23.9416 67.1788 24.2975 67.1195 24.5941C64.0942 33.3141 67.1788 36.9326 73.8819 27.6194C74.2971 27.0855 73.7039 26.7889 73.348 27.2635C67.1195 35.5682 65.0433 32.8988 67.8313 24.7128L69.1363 20.7977C70.738 17.891 71.9244 14.9844 72.5176 12.0184L72.4582 11.4845C72.5176 11.3066 72.4582 11.1286 72.3989 11.0693C72.221 10.832 72.1023 10.8913 71.9837 11.0693L71.6871 11.3659C70.4414 15.3996 69.3736 18.1876 68.1279 21.6281C66.8822 23.9416 65.3992 26.1957 63.501 28.3906C62.3146 29.7549 60.9503 31.8311 59.1114 32.5429C58.5775 30.4074 60.0012 27.2635 60.713 25.0093C62.3146 20.0858 65.1619 12.315 67.594 7.62875C67.7127 7.15419 67.2974 6.97624 66.9415 7.39147ZM73.8407 24.95C73.1881 27.6194 72.5949 30.2888 72.0018 32.9582C72.0611 33.2547 72.0611 33.2547 72.3577 33.3734C72.4763 33.3141 72.5356 33.3141 72.5949 33.3141C72.8322 33.2547 72.8915 33.1954 73.0102 33.0175C74.3152 30.882 76.8066 24.2382 79.7133 26.1364C80.1878 26.0178 80.7217 24.8907 80.2472 24.8314C76.6287 24.0602 74.7304 28.9244 73.0695 32.1277L74.5525 25.0687C74.6711 24.5348 74.1373 24.3568 73.8407 24.95Z" fill={fill}/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="140" height="51" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="81"
        height="42"
        viewBox="0 0 81 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path d="M3.08461 20.857C9.90635 17.2978 17.7958 9.34901 24.2617 8.45922C26.4565 9.70493 23.6685 17.4165 22.7787 19.374C19.9907 25.9585 15.2451 32.4243 9.49111 37.2885C6.58446 39.6612 4.62692 41.2036 1.60162 40.0765C1.18639 39.9578 0.711833 40.4324 1.00843 40.7883C7.83017 44.3475 20.1686 27.0855 23.5498 19.4926C24.7955 16.6453 26.1006 12.0777 25.8633 10.0608C25.3887 5.13733 19.3381 9.23037 15.5417 11.7811C11.33 14.6284 7.41493 17.8317 2.90665 20.2045C2.55074 20.5011 2.61006 20.9756 3.08461 20.857ZM27.3699 21.0349C25.353 21.2722 21.2007 24.4162 21.8532 26.5517C22.2684 27.738 23.7514 27.8567 24.7598 28.3906C22.8616 30.8227 20.3109 34.0852 20.0736 35.9241C20.0736 36.1021 20.0736 36.2207 20.2516 36.28C22.4464 36.8732 27.1326 30.7633 26.4801 29.1024C26.3615 28.6872 26.1242 28.3906 25.8276 28.1533C28.3783 24.5348 31.3443 20.1452 34.073 15.6962C33.8357 16.1114 33.6578 16.586 33.4798 17.0012C31.5223 21.7468 29.6834 26.6703 28.9715 31.3565C28.9715 31.6531 28.9715 31.7124 29.2681 31.7718C33.0646 30.9413 35.1407 23.7636 39.1745 21.8654C40.1829 25.0687 34.9628 34.6784 41.0134 33.2547C41.6659 33.0768 41.6066 32.4836 41.0727 32.4836C40.6575 32.5429 40.1829 32.7802 39.7677 32.7802C37.6915 32.7209 40.1236 24.0602 40.3015 22.7552C40.3609 22.2807 40.0049 20.679 39.3524 20.9756C36.0899 22.5772 30.9291 30.704 29.802 30.882C30.5731 26.3144 32.4714 21.5688 34.3696 16.9419C35.0221 15.3403 35.7339 13.3827 36.4458 11.3659C38.4033 7.74739 40.0049 4.36618 40.6575 1.63749C40.6575 1.57816 40.7168 1.45953 40.7761 1.40021C41.0727 0.866334 40.7168 0.569737 40.3015 0.925652C40.3015 0.984971 40.2422 0.984971 40.2422 1.04429L39.9456 1.34089C39.9456 1.51885 39.827 1.69681 39.7677 1.87476C38.344 4.84073 36.9796 8.22195 35.6746 11.4845C32.8866 16.8233 29.3274 22.3993 26.6581 26.0178C26.3615 26.4923 25.8276 27.0262 25.353 27.738C24.4632 27.2042 23.3362 26.9076 22.6837 26.1364C23.0989 24.0602 25.709 21.9841 27.3106 21.8061C27.9038 21.6281 27.9038 21.0349 27.3699 21.0349ZM25.709 29.4583C26.0649 30.882 22.6837 34.975 20.9041 35.5682C21.2007 34.3225 22.4464 32.7209 23.3955 31.5345C23.2769 31.6531 23.2175 31.7718 23.2769 31.7124L25.353 28.8651C25.531 29.0431 25.6496 29.221 25.709 29.4583ZM43.6058 24.4162C42.9533 27.1448 42.5381 28.2719 42.4787 30.9413C42.4787 31.1786 42.716 31.2379 42.894 31.1786C45.86 29.5176 47.4023 24.8907 50.3682 23.9416C51.0801 24.8314 49.775 26.4923 51.258 26.9076C52.3258 27.1448 53.3935 25.1873 54.3426 24.8907C55.5883 26.0771 53.8681 32.3056 58.4357 28.5685C58.9102 28.2126 58.673 27.738 58.1391 27.9753C57.4866 28.5092 56.7154 28.9837 55.9443 28.6872C55.2324 27.2635 55.9443 25.2466 54.7579 24.0602H54.5206C53.3342 24.4162 52.6817 25.5432 51.5546 26.1364C51.1987 25.9585 52.0885 20.2045 48.1141 24.7721C44.7329 28.4499 44.0211 29.3397 43.2499 30.2295C43.2499 27.916 43.7838 26.9076 44.3177 24.5348C44.4363 24.0009 43.9024 23.823 43.6058 24.4162ZM66.9415 7.39147C64.3908 12.137 61.6028 19.9079 60.0012 24.8907C59.1114 27.5601 57.6284 30.7633 58.3995 33.2547C58.5775 33.3734 58.6961 33.4327 58.8741 33.3734C61.3062 32.4243 62.7892 30.704 64.1535 28.6278C65.2806 26.9669 66.3483 25.3059 67.4161 23.645C67.2974 23.9416 67.1788 24.2975 67.1195 24.5941C64.0942 33.3141 67.1788 36.9326 73.8819 27.6194C74.2971 27.0855 73.7039 26.7889 73.348 27.2635C67.1195 35.5682 65.0433 32.8988 67.8313 24.7128L69.1363 20.7977C70.738 17.891 71.9244 14.9844 72.5176 12.0184L72.4582 11.4845C72.5176 11.3066 72.4582 11.1286 72.3989 11.0693C72.221 10.832 72.1023 10.8913 71.9837 11.0693L71.6871 11.3659C70.4414 15.3996 69.3736 18.1876 68.1279 21.6281C66.8822 23.9416 65.3992 26.1957 63.501 28.3906C62.3146 29.7549 60.9503 31.8311 59.1114 32.5429C58.5775 30.4074 60.0012 27.2635 60.713 25.0093C62.3146 20.0858 65.1619 12.315 67.594 7.62875C67.7127 7.15419 67.2974 6.97624 66.9415 7.39147ZM73.8407 24.95C73.1881 27.6194 72.5949 30.2888 72.0018 32.9582C72.0611 33.2547 72.0611 33.2547 72.3577 33.3734C72.4763 33.3141 72.5356 33.3141 72.5949 33.3141C72.8322 33.2547 72.8915 33.1954 73.0102 33.0175C74.3152 30.882 76.8066 24.2382 79.7133 26.1364C80.1878 26.0178 80.7217 24.8907 80.2472 24.8314C76.6287 24.0602 74.7304 28.9244 73.0695 32.1277L74.5525 25.0687C74.6711 24.5348 74.1373 24.3568 73.8407 24.95Z" fill={fill}/>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;