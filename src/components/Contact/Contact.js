import React, { useState } from "react";
import { ContactWrapper, Email, Whatsapp } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("varunreddy.billuri@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const whatsappNumber = "+917702661217";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                  rowGap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <span>varunreddy.billuri@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:varunreddy.billuri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
            <Whatsapp>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                  rowGap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <span>{whatsappNumber}</span>
                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <FaWhatsapp size={25} style={{ marginRight: '10px' }} />
                  Chat on WhatsApp
                </a>
              </div>
            </Whatsapp>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
