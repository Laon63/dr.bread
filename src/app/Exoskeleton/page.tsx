import { Typography } from "@mui/material";

export default function () {
  return (
    <div>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Typography variant="h4" component={"h4"}>
          Development of Wearable Robot System for Gait Rehabilitation
        </Typography>
        <div style={{ fontSize: '24px' }}>Objective</div>
        <div style={{ fontSize: '13px' }}><b>Wearable robots</b> are one of the most promising technologies for rehabilitation and assistance of human movements. 
        In this study, I developed a <b>lower-extremity wearable robot for the gait rehabilitation</b> of neurological patients, especially <b>stroke and spinal cord injury patients.</b> Stroke patients with hemiplegia exhibit different gait characteristics between the affected and healthy sides of their limbs. 
        Furthermore, unlike stroke patients, spinal cord injury patients have lost their entire ability to control their lower limbs. 
        These patients often use crutches to maintain their balance and walk. Therefore, it is crucial to consider the use of crutches and the users' postures in the motion planning and control of the exoskeleton robot.
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/stroke.png?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/dmp_motion_2.png?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        {/* <div style={{ fontSize: '24px' }}>Approach</div>
        <div style={{ fontSize: '13px' }}>To address the different gait characteristics between the affected and healthy sides of the limbs, I implemented two distinct control strategies. For the healthy side, I used <b>friction and gravity compensation control to allow natural movement</b>. 
          For the affected side, I used <b>impedance control</b> to follow the desired trajectory, which was set based on the trajectory of the healthy side.
          Furthermore, to account for the use of crutches, I estimated the crutch supporting points and the user's posture using a forward kinematic model with sensor systems. 
          I then computed the desired step length to ensure stable walking with crutches and aligned the desired hip and knee joint angles with this step length using the <b>movement primitives method.</b>
        </div>
        
        <div style={{ fontSize: '24px' }}>Results</div>
        <div style={{ fontSize: '13px' }}>We evaluated our method with <b>13 stroke patients over 12 weeks</b>. After 12 weeks, the patients showed significant improvements: their 6-minute walk distance increased by 44% (Fig A), their performance in the Timed Up and Go test improved by 23.7% (Fig B), and their gait balance improved with a 10.4% increase in the Berg Balance Test (Fig C) and a 10.0% increase in the Fugl-Meyer Score (Fig D).
          Additionally, testing the motion planning method with healthy subjects showed that our proposed method generated different step lengths depending on the crutch support points and user posture (<b><span style={{ color: 'blue' }}>left video: pre-defined walking, center video: larger desired step, right video: lower desired step</span></b>).
        </div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img 
                src="https://github.com/shwang45/shblog/blob/main/img/stroke_results.png?raw=true"
                alt="R1"
                style={{ maxWidth: "70%", height: "auto", display: "block" }}
              />
          </div> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/1st_step.gif?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/1st_step-2.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/1st_step-3.gif?raw=true"
              alt="R3"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img 
                src="https://github.com/shwang45/shblog/blob/main/img/dmp_results.png?raw=true"
                alt="R1"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
          </div>
        </div> */}
        <div style={{ fontSize: '24px' }}>Publications</div>
          <a href="https://drive.google.com/file/d/1j1zDVH7KIavP5roXyTdILljokjQ7zwsF/view?usp=share_link">
          [1] Sung, J., Choi, S., Kim, H., Lee, G., Han, <b>Hwang, S. H.</b>, et al. 2017. Feasibility of rehabilitation training with a newly developed, portable, gait assistive robot for balance function in hemiplegic patients. Annals of rehabilitation medicine, 41(2), 178.
          </a>
          <a href="https://drive.google.com/file/d/1udefqC5UL2XV8vS8TCNGYiKgm_PZ8pyY/view?usp=share_link">
          [2] Moon, S. B., Ji, Y. H., Jang, H. Y., <b>Hwang, S. H.</b>, et al. 2017. Gait analysis of hemiplegic patients in ambulatory rehabilitation training using a wearable lower limb robot: A pilot study. International Journal of Precision Engineering and Manufacturing, 18(12).
          </a>
          <a href="https://drive.google.com/file/d/1uAcDbg2cB4YBerS5aDSeX-xktPsWGzLv/view?usp=share_link">
          [3] <b>Hwang, S. H.</b>, et al. 2019. Intuitive gait pattern generation for an exoskeleton robot. International Journal of Precision Engineering and Manufacturing 20.11 (2019).
          </a>
          <a href="https://drive.google.com/file/d/1P6g7vDCo1y2vugWvleFYaRhpg-poFYDI/view?usp=share_link">
          [4] <b>Hwang, SH</b>, Sun, DI, Han JK, Kim WS. 2021. Gait pattern generation algorithm for lower extremity rehabilitation exoskeleton robot considering wearers condition. Intelligent Service Robotics (2021).
          </a>
      </div>
    </div>
  );
}
