# Node Types

- Node types are represented by one of the following 12 numeric constants on the Node type:

  - Node.ELEMENT_NODE (1)
  - Node.ATTRIBUTE_NODE (2)
  - Node.TEXT_NODE (3)
  - Node.CDATA_SECTION_NODE (4)
  - Node.ENTITY_REFERENCE_NODE (5)
  - Node.ENTITY_NODE (6)
  - Node.PROCESSING_INSTRUCTION_NODE (7)
  - Node.COMMENT_NODE (8)
  - Node.DOCUMENT_NODE (9)
  - Node.DOCUMENT_TYPE_NODE (10)
  - Node.DOCUMENT_FRAGMENT_NODE (11)
  - Node.NOTATION_NODE (12)

- Node.nodeType property is an integer that identifies what the node is. It distinguishes different kind of nodes from each other, such as elements, text and comments.
- Two properties, nodeName and nodeValue, give specific information about the node
- The node values are completely dependent on the node type.
