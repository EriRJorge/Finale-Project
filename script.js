function changeColorblindness(type) {
  const stylesheet = document.getElementById('colorblind-stylesheet');

  switch (type) {
    case 'normal':
      stylesheet.href = 'styles/normal.css';
      document.getElementById('info-title').innerText = 'What is Colorblindness?';
      document.getElementById('info').innerText = "The inability to distinguish certain colors or any colors at all. It is a common disability that affects about 8% of men and 0.5% of women. Color blindness is usually genetic and can be caused by a defect in the genes responsible for producing the cones in the eye. There are four types of color blindness, including deuteranopia, protanopia, tritanopia, and monochromacy.";
      document.getElementById('info-title-1').innerText = 'How does Colorblindness Work?';
      document.getElementById('info-1').innerText = 'Color blindness occurs when there is a problem with the pigments in the nerve cells in the eye that sense color. This can happen when genes that help make the photopigments in the conesof the eye dont work properly.';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Colorblindness';
      document.getElementById('info-2').innerText = '* Some astronauts have been found to be colorblind, but this has not been a disqualifying factor for space missions. * All babies are born colorblind. * Some animals are colorblind, while others have a different spectrum of color vision. For example, dogs are thought to see the world in shades of blue and yellow.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Colorblindness';
      document.getElementById('info-3').innerText = '* Approximately 8% of men of Northern European descent are affected by red-green colorblindness. The condition is less common in women, affecting around 0.5% * Red-green colorblindness is the most common, followed by blue-yellow colorblindness. To put that into perspective in a all boys school with 1,000 sudents there would be approximately 80-85 boys with colorblindness.';
      document.getElementById('info-title-4').innerText = 'Acomidations In Software Developbment for Colorblindness';
      document.getElementById('info-4').innerText = '* It would be better if errors and warnings appeared with a less vibrant color scheme. * Implement text colors that are easier for those with color blindness to see when designing a website or web application.';
      break;
    case 'protanopia':
      stylesheet.href = 'styles/protanopia.css';
      document.getElementById('info-title').innerText = 'What you are now seeing is Protanopia.';
      document.getElementById('info').innerText = 'Protanopia is the most common type of color blindness which affects the ability to distinguish between red and green. People with protanopia see red colors as greener, but green colors appear less dark.';
      document.getElementById('info-title-1').innerText = 'How does Protanopia Work?';
      document.getElementById('info-1').innerText = 'Protanopia is typically an inherited condition caused by a genetic mutation. It is a form of red-green color blindness that results from a defect in the L-cones responsible for perceiving red light.';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Protanopia';
      document.getElementById('info-2').innerText = '* Because the genes related to protanopia are X-linked, the condition is more common in males. * People with protanopia often develop adaptation strategies to navigate a world designed for individuals with normal color vision. They may rely on contextual cues, brightness, and contrast to interpret colors and make distinctions.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Protanopia';
      document.getElementById('info-3').innerText = '* In an all boys school with 1,000 students ther would be 11-13 boys with protanopia * Protanopia is a color blindness condition affecting 1.08% of the world population, reaching approximately 87,238,036 as of Decmeber 9th, 2023.';
      document.getElementById('info-title-4').innerText = 'Here Are Some Links About Protanopia';
      document.getElementById('info-4').innerText = 'https://www.verywellhealth.com/what-do-color-blind-people-see-5092522, https://www.color-blindness.com/50-facts-about-color-blindness/.';
      break;
    case 'deuteranopia':
      stylesheet.href = 'styles/deuteranopia.css';
      document.getElementById('info-title').innerText = 'What you are now seeing is Deuteranopia.';
      document.getElementById('info').innerText = 'Deuteranopia is a type of red-green color blindness that makes it difficult to distinguish green and red pigments. People with deuteranopia see green colors as redder, but red colors appear less dark.';
      document.getElementById('info-title-1').innerText = 'How does Deuteranopia Work?';
      document.getElementById('info-1').innerText = 'Deuteranopia occurs when there is a problem with the pigments in the nerve cells in the eye that sense color. This can happen when genes that help make the photopigments in the conesof the eye dont work properly.';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Deuteranopia';
      document.getElementById('info-2').innerText = 'In people with deuteranopia, the M-cones are either missing or not functioning properly. In people with deuteranopia, the M-cones are either missing or not functioning properly.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Deuteranopia';
      document.getElementById('info-3').innerText = '* It is not as common as other types of color blindness and is only present in less than 1% of males. * In an all boys school with 1,000 students there would be approximately 11-13 boys with deuteranopia.';
      document.getElementById('info-title-4').innerText = 'Here Are Some Links About Deuteranopia';
      document.getElementById('info-4').innerText = 'https://www.color-blindness.com/deuteranopia-red-green-color-blindness/, https://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness.';
      break;
    case 'tritanopia':
      stylesheet.href = 'styles/tritanopia.css';
      document.getElementById('info-title').innerText = 'What you are now seeing is Tritanopia.';
      document.getElementById('info').innerText = 'Tritanopia is a rare condition that makes it difficult to distinguish between blue and yellow colors.';
      document.getElementById('info-title-1').innerText = 'How does Tritanopia Work?';
      document.getElementById('info-1').innerText = 'In tritanopia, the S-cones are either missing or not functioning properly. This deficiency leads to a reduced ability to perceive blue light accurately.';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Tritanopia';
      document.getElementById('info-2').innerText = '* Tritanopes have the best color discrimination in the red to green region. * Tritanopia is not gender related therefore women and men are equally affected.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Tritanopia';
      document.getElementById('info-3').innerText = '* In an all boys school with 1,000 students there would be approximately 1 boy with tritanopia. * There is a lot of discrepancy in the numbers in the different studies, but on average, one out of ten thousand persons is affected.';
      document.getElementById('info-title-4').innerText = 'Here Are Some Links About Tritanopia';
      document.getElementById('info-4').innerText = 'https://www.color-blindness.com/tritanopia-blue-yellow-color-blindness/, https://www.britannica.com/science/tritanopia. ';
      break;
    case 'monochromacy':
      stylesheet.href = 'styles/monochromacy.css';
      document.getElementById('info-title').innerText = 'What you are now seeing is Monochromacy.';
      document.getElementById('info').innerText = 'Monochromacy, also known as total color blindness, is a rare condition where an individual sees the world in shades of gray. ';
      document.getElementById('info-title-1').innerText = 'How does Monochromacy Work?';
      document.getElementById('info-1').innerText = 'In cone monochromacy, only one type of cone cell is functional (either S-cones, M-cones, or L-cones), and the other two types are absent or not functioning. This results in the inability to perceive colors properly.';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Monochromacy';
      document.getElementById('info-2').innerText = '* If one of their faulty cones is blue, their vision may not be as sharp, they may be nearsighted, and they may have uncontrollable eye movements.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Monochromacy';
      document.getElementById('info-3').innerText = '* It affects about 1 in 33,000 people. * To put that into perspective in a all boys school with 1,000 students there would be approximately 0 boys with monochromacy.';
      document.getElementById('info-title-4').innerText = 'Here Are Some Links About Monochromacy';
      document.getElementById('info-4').innerText = 'https://pubmed.ncbi.nlm.nih.gov/30578497/, https://www.color-blindness.com/2007/07/20/monochromacy-complete-color-blindness/.';
      break;
      case 'blur':
      stylesheet.href ='styles/blur.css';
      document.getElementById('info-title').innerText = 'What you are now seeing is Blurry Vision.';
      document.getElementById('info').innerText = 'Blurry vision occurs when the eyes are unable to focus light properly onto the retina, resulting in a lack of sharpness in the vision.';
      document.getElementById('info-title-1').innerText = 'How does Blurry Vision Work?';
      document.getElementById('info-1').innerText = 'Blurred vision can be caused by eye conditions, including: difficulty focusing your eyesight, such as with near-sightedness or far-sightedness. Astigmatism (when the surface of the eye is not curved properly) Presbyopia (when your eyes find it harder to focus as you age)';
      document.getElementById('info-title-2').innerText = 'Weird Facts About Blurry Vision';
      document.getElementById('info-2').innerText = '* Blurring vision on command: It is normal to be able to blur your vision on command. Some people can do it more than others, and some can not do it at all. * When we are severely stressed and anxious, high levels of adrenaline in the body can cause pressure on the eyes, resulting in blurred vision.';
      document.getElementById('info-title-3').innerText = 'Here Are Some Statistics About Blurry Vision';
      document.getElementById('info-3').innerText = '* Approximately 12 million individuals aged 40 and above in the United States experience vision impairment, along with an additional approximately 5,002,814 children under the age of 18, bringing the total affected population to around 17,002,814.';
      document.getElementById('info-title-4').innerText = 'Here Are Some Links About Blurry Vision';
      document.getElementById('info-4').innerText = 'https://www.cnet.com/health/personal-care/dry-eyes-eye-strain-blurry-vision-8-common-eye-symptoms-and-what-they-mean/, ';
      break;

    default:

      stylesheet.href = 'styles/normal.css';
  }


  updateContent(type);
}

function updateContent(type) {
  const info = document.getElementById('info');
  const colorChangingElements = document.querySelectorAll('.color-change-element');
  const colorChangingImage = document.getElementById('color-changing-image');
}
