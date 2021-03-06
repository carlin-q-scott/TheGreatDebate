angular.module('core').value('reactions', [
  { 
    title: 'Ad Hominem',
    value: 'ad-hominem',
    icon: 'ad-hominem',
    description: 'Arguments of this kind focus not on the evidence for a view but on the character of the person advancing it; they seek to discredit positions by discrediting those who hold them.',
    url: 'http://www.logicalfallacies.info/'
  },
  { 
    title: 'Strawman',
    value: 'strawman',
    icon: 'strawman',
    description: 'A straw man argument is one that misrepresents a position in order to make it appear weaker than it actually is, and then concludes that the real position has been refuted.',
    url: 'http://www.logicalfallacies.info/' },
  { 
    title: 'Circular reasoning',
    value: 'circular',
    icon: 'circular',
    description: 'An argument is circular if its conclusion is among its premises, if it assumes (either explicitly or not) what it is trying to prove. Such arguments are said to beg the question.',
    url: 'http://www.logicalfallacies.info/' },
  { 
    title: 'False Dichotomy',
    value: 'dichotomy',
    icon: 'dichotomy',
    description: 'This fallacy is committed when a false dilemma is presented, i.e. when someone is asked to choose between two options when there is at least one other option available.',
    url: 'http://www.logicalfallacies.info/' },
  { 
    title: "Source doesn't back claim",
    value: 'incorrect-source',
    icon: 'incorrect-source',
    description: 'The cited source does not show evidence to support the position it is cited for',
    url: 'http://libguides.mit.edu/citing' },
  { 
    title: 'Low quality source',
    value: 'low-quality-source',
    icon: 'low-quality-source',
    description: 'The cited source is unreliable or known to be biased',
    url: 'http://libguides.mit.edu/citing' },
  { 
    title: 'Good Point',
    value: 'good-point',
    icon: 'good-point',
    description: 'This argument is well-written, well-reasoned and contributes to healthy discussion',
    url: 'http://libguides.mit.edu/citing' },
  { 
    title: 'Good Citation',
    value: 'good-citation',
    icon: 'good-citation',
    description: 'The cited source is on-topic, reliable, and free from bias',
    url: 'http://libguides.mit.edu/citing'
  },
]);
