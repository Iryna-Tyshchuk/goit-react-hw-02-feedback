import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';
import { SectionTitle } from './SectionTitle';
export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </StyledSection>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
