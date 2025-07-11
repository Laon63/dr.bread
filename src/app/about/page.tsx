import { Typography } from "@mui/material";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <Typography variant="h4" component="h1" align="center">
        Welcome to the <br />
        Assistive Intelligence and Motion Lab (AIM Lab)
      </Typography>

      <img
        src="/img/aim_logo.jpg"
        alt="AIM Lab Logo"
        style={{ maxWidth: "700px", height: "auto", marginTop: 8, marginBottom: 8 }}
      />

      <Typography variant="body1" component={"p"} sx={{ lineHeight: 1.6, textAlign: "justify" }}>
        <strong>AIM (Assistive & Intelligent Motion)</strong> Lab focuses on designing wearable robotic systems that intelligently support and enhance human movement across both <strong>rehabilitation</strong> and <strong>industrial</strong> domains. 
        Our mission is to develop personalized assistive technologies that adapt to each individual's physical condition and task demands by integrating <strong>robotics, human biomechanics, control theory, and machine learning.</strong>
      </Typography>
      {/* <Typography variant="h6" component={"h6"}>
        Research Interests
      </Typography>
      <Typography variant="body1" component={"p"}>
        Rehabilitation Robotics, Human-Robot Interaction, Safety-Critical Control, Exoskeleton Robot
      </Typography> */}
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 16, marginBottom: 16 }}>
        <img src="https://github.com/shwang45/shblog/blob/main/img/profile_2.png?raw=true" alt="Seunghoon Hwang" style={{ maxWidth: "90%", height: "auto" }} />
      </div> */}
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
              src="https://github.com/shwang45/shblog/blob/main/img/r3_w_safety.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/B_system.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      {/* <Typography variant="body2" component={"p"} sx={{ textAlign: 'center', fontSize: '20px' }}>
        <a href="shwang45@asu.edu">Email</a>/
        <a href="https://drive.google.com/file/d/1mSk_W9zWS9jLHnDnXcWxWDhZENIcgSIx/view?usp=share_link">CV</a>/
        <a href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ&amp;hl=en">
          Google Scholar
        </a>
      </Typography> */}
    </div>
  );
}
