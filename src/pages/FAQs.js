import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const faqs = [
    {
      question: 'What is Hawk Standard?',
      answer:
        'Hawk Standard is a modern trading platform that enables users to invest in stocks and other financial instruments. We provide a secure, user-friendly interface for both beginners and experienced traders.',
    },
    {
      question: 'How do I get started with Hawk Standard?',
      answer:
        'Getting started is easy! Simply create an account, complete the verification process, deposit funds, and you can begin trading. Our platform provides comprehensive guides and support to help you get started.',
    },
    {
      question: 'What are the fees for trading?',
      answer:
        'We offer competitive trading fees that vary based on the type of transaction and account type. Please visit our pricing page for detailed information about our fee structure.',
    },
    {
      question: 'Is my money safe with Hawk Standard?',
      answer:
        'Yes, we take security very seriously. We implement industry-standard security measures, including encryption and two-factor authentication, to protect your funds and personal information.',
    },
    {
      question: 'What trading tools are available?',
      answer:
        'Our platform offers various trading tools including real-time market data, technical analysis tools, portfolio tracking, and automated trading options. We regularly update our tools to provide the best trading experience.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'Our customer support team is available 24/7 through live chat, email, and phone. You can also visit our Help Center for detailed guides and FAQs.',
    },
    {
      question: 'What types of accounts are available?',
      answer:
        'We offer various account types including individual accounts, joint accounts, and corporate accounts. Each account type has specific features and requirements.',
    },
    {
      question: 'Can I trade on mobile devices?',
      answer:
        'Yes, our platform is fully responsive and available on both iOS and Android devices. You can download our mobile app from the App Store or Google Play Store.',
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Container maxWidth="lg">
        <Typography variant="h2" className="text-center font-bold mb-4 text-gray-800">
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" className="text-center mb-12 text-gray-600">
          Find answers to common questions about our platform
        </Typography>

        <Box className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion key={index} className="mb-4">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="bg-white hover:bg-gray-50"
              >
                <Typography variant="h6" className="font-semibold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="textSecondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box className="text-center mt-12">
          <Typography variant="h6" className="mb-4 text-gray-800">
            Still have questions?
          </Typography>
          <Typography variant="body1" color="textSecondary" className="mb-6">
            Our support team is here to help you 24/7
          </Typography>
          <Box className="flex justify-center space-x-4">
            <a
              href="mailto:support@hawkstandard.com"
              className="text-primary hover:text-secondary"
            >
              Contact Support
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/help-center"
              className="text-primary hover:text-secondary"
            >
              Visit Help Center
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FAQs; 