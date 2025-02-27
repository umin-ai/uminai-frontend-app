export const sampleJson = {
  "@context": {
    "uPI": "https://example.org/upi#",
    "schema": "https://schema.org/"
  },
  "@type": "uPI:ProductModule",
  "did": "did:uminai:container-unique-id",
  "product": {
    "@type": "schema:Product",
    "name": "Container",
    "identifier": "CONTAINER-UPC-123456789",
    "description": "A durable storage container designed for everyday use.",
    "material": "High-grade Plastic",
    "dimensions": {
      "length": "10 cm",
      "width": "10 cm",
      "height": "10 cm"
    },
    "weight": "200 g",
    "manufacturer": {
      "@type": "schema:Organization",
      "name": "Container Co.",
      "location": "USA"
    },
    "productionInfo": {
      "batchNumber": "C-001",
      "productionDate": "2025-01-15",
      "expiryDate": "2030-01-15",
      "certifications": [
        "ISO9001",
        "Recyclable"
      ],
      "origin": "USA"
    },
    "uPI:generalization": [
      "PhysicalProduct",
      "DurableGood",
      "StorageSolution"
    ],
    "category": [
      "Storage",
      "Household"
    ],
    "color": "Blue",
    "usageInstructions": {
      "@type": "schema:HowTo",
      "name": "How to Use the Container",
      "step": [
        {
          "@type": "schema:HowToStep",
          "text": "Ensure the container is empty and clean before use."
        },
        {
          "@type": "schema:HowToStep",
          "text": "Open the container by lifting the lid slowly."
        },
        {
          "@type": "schema:HowToStep",
          "text": "Place your items inside, making sure to organize them properly."
        },
        {
          "@type": "schema:HowToStep",
          "text": "Close the lid securely to keep the contents safe."
        },
        {
          "@type": "schema:HowToStep",
          "text": "Store the container in a cool, dry place to maintain its condition."
        }
      ]
    }
  }
}
